// @flow

// These are the languages that'll be included in the generated
// prism/index.js file

module.exports = {
  markup: true,
  bash: true,
  clike: true,
  c: true,
  cpp: true,
  css: true,
  "css-extras": true,
  javascript: true,
  jsx: true,
  "js-extras": true,
  "js-templates": true,
  coffeescript: true,
  diff: true,
  git: true,
  go: true,
  graphql: true,
  handlebars: true,
  json: true,
  less: true,
  makefile: true,
  // Load YAML before Markdown, because the latter has a dependency on the
  // former. See https://github.com/PrismJS/prism/issues/3283
  yaml: true,
  markdown: true,
  objectivec: true,
  ocaml: true,
  python: true,
  reason: true,
  sass: true,
  scss: true,
  sql: true,
  stylus: true,
  tsx: true,
  typescript: true,
  wasm: true,
};
