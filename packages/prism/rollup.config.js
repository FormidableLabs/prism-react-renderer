import * as globby from "globby"
import * as path from "path"
import * as fs from "fs"

import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import buble from "@rollup/plugin-buble"
import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"

const pkg = require("./package.json")

const externalModules = [
  "dns",
  "fs",
  "path",
  "url",
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
]

const externalPredicate = new RegExp(`^(${externalModules.join("|")})($|/)`)
const bundlePredicate = /\/themes\//
const externalTest = id =>
  externalPredicate.test(id) || bundlePredicate.test(id)

const config = {
  treeshake: { propertyReadSideEffects: false },
  external: externalTest,
  plugins: [
    resolve({
      dedupe: externalModules,
      mainFields: ["module", "jsnext", "main"],
      preferBuiltins: false,
      browser: true,
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(require("react")),
      },
    }),
    json(),
    babel({
      babelrc: false,
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [],
      plugins: [
        "babel-plugin-macros",
        "@babel/plugin-proposal-class-properties",
      ],
    }),
    buble({
      transforms: {
        unicodeRegExp: false,
        dangerousForOf: true,
        dangerousTaggedTemplateString: true,
        asyncAwait: false,
      },
      objectAssign: "Object.assign",
      exclude: "node_modules/**",
    }),
    babel({
      babelrc: false,
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [],
      plugins: [
        "@babel/plugin-transform-object-assign",
        [
          "@babel/plugin-transform-react-jsx",
          {
            pragma: "React.createElement",
            pragmaFrag: "React.Fragment",
            useBuiltIns: true,
          },
        ],
      ],
    }),
    typescript({
      tsconfig: path.resolve("../../tsconfig.json"),
      declaration: true,
      outDir: "dist",
    }),
  ],
}

if (!fs.existsSync("themes/")) fs.mkdirSync("themes")

const themes = globby.sync("src/themes/*.js").map(input => {
  const name = path.basename(input, ".js")
  const dir = "themes/" + name

  if (!fs.existsSync(dir)) fs.mkdirSync(dir)

  const packageJson = {
    name: "@prism-react-renderer/" + name,
    private: true,
    sideEffects: false,
    main: "index.js",
    module: "index.mjs",
    license: "MIT",
  }

  fs.writeFileSync(
    path.join("./themes", name, "package.json"),
    JSON.stringify(packageJson, undefined, 2)
  )

  return {
    ...config,
    input,
    output: [
      {
        file: path.join("./themes", name, "index.js"),
        format: "cjs",
      },
      {
        file: path.join("./themes", name, "index.mjs"),
        format: "esm",
      },
    ],
  }
})

export default [
  {
    ...config,
    input: {
      dist: "./src/index.ts",
      prism: "./src/vendor/prism/index.ts",
    },
    output: [
      {
        dir: "./",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "dist/[name]-[hash].js",
        format: "cjs",
      },
      {
        dir: "./",
        entryFileNames: "[name]/index.mjs",
        chunkFileNames: "dist/[name]-[hash].mjs",
        format: "esm",
      },
    ],
  },
  ...themes,
]
