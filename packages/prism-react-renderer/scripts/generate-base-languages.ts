const { readFileSync, writeFileSync } = require("fs")
const { dirname, join } = require("path")
const { languages } = require("prismjs/components")
const prismPath = dirname(require.resolve("prismjs"))

const baseLanguages = {
  bash: true,
  jsx: true,
  graphql: true,
  markdown: true,
  css: true,
  typescript: true,
  tsx: true,
} as const

let output = `
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck\n
`

type LanguageEntry = {
  title: string
  require: string | string[]
  optional: string | string[]
  alias: string
  owner: string
  peerDependencies?: never[]
}

const addLanguageToOutput = (language: string) => {
  const pathToLanguage = "components/prism-" + language
  const fullPath = join(prismPath, pathToLanguage + ".js")
  const contents = readFileSync(fullPath, "utf8")
  output += contents
}

const visitedLanguages: Record<string, boolean> = {}

const visitLanguage = (language: string, langEntry: LanguageEntry) => {
  // Mark language as visited or return if it was
  if (visitedLanguages[language]) {
    return
  } else {
    visitedLanguages[language] = true
  }

  // Required + optional dependencies come before the actual language
  const dependencies = ([] as string[])
    .concat(langEntry.require)
    .concat(langEntry.optional)
    .filter(f => f)

  if (dependencies.length > 0) {
    dependencies.forEach(x => {
      if (baseLanguages[x as keyof typeof baseLanguages]) {
        if (languages[x]) {
          visitLanguage(x, languages[x])
        } else {
          console.warn("[prismjs/components]: Language", x, "does not exist!")
        }
      }
    })
  }

  // Add current language to output
  addLanguageToOutput(language)

  // Peer dependencies come after the actual language
  const peerDependencies = ([] as string[])
    .concat(langEntry.peerDependencies || "")
    .filter(f => f)

  if (Array.isArray(peerDependencies)) {
    peerDependencies.forEach(x => {
      if (languages[x]) {
        visitLanguage(x, languages[x])
      } else {
        console.warn("[prismjs/components]: Language", x, "does not exist!")
      }
    })
  }
}

Object.keys(baseLanguages).forEach(language => {
  visitLanguage(language, languages[language])
})

try {
  writeFileSync("./src/vendor/prism/prism-langs.ts", output)
} catch (err) {
  console.error(err)
}
