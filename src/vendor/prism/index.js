import * as Prism from './prism-core'
import codegen from 'codegen.macro'

// Babel Codegen Macro:
// Get a list of all prismjs languages and inline them here.
// They should only depend on "Prism" being present in the current scope.

codegen`
  const { readFileSync } = require('fs')
  const { dirname, join } = require('path')
  const { languages } = require('prismjs/components')

  const prismPath = dirname(require.resolve('prismjs'))
  const languageKeys = Object.keys(languages).filter(lang => lang !== 'meta')

  let output = ''

  const toDependencies = arr => {
    if (typeof arr === 'string') {
      return [arr]
    }

    return arr;
  };

  const addLanguageToOutput = language => {
    const pathToLanguage = 'components/prism-' + language
    const fullPath = join(prismPath, pathToLanguage + '.js')
    const contents = readFileSync(fullPath, 'utf8')
    const header = '\\n\\n/* "prismjs/' + pathToLanguage + '" */\\n'
    output += header + contents
  }

  const visitedLanguages = {}

  const visitLanguage = (language, langEntry) => {
    if (visitedLanguages[language]) {
      return
    } else {
      visitedLanguages[language] = true
    }

    const required = toDependencies(langEntry.require)

    if (Array.isArray(required)) {
      required.forEach(x => {
        if (languages[x]) {
          visitLanguage(x, languages[x])
        } else {
          console.warn('[prismjs/components]: Language', x, 'does not exist!')
        }
      })
    }

    addLanguageToOutput(language)

    const peerDependencies = toDependencies(langEntry.peerDependencies)

    if (Array.isArray(peerDependencies)) {
      peerDependencies.forEach(x => {
        if (languages[x]) {
          visitLanguage(x, languages[x])
        } else {
          console.warn('[prismjs/components]: Language', x, 'does not exist!')
        }
      })
    }
  };

  languageKeys.forEach(language => {
    visitLanguage(language, languages[language])
  })

  module.exports = output
`

module.exports = Prism
