import { tokenize as prismTokenize, languages } from './vendor/prism'

const newlineRe = /(\r\n|\r|\n)/

// Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. The length key is consciously kept precise
// so that the original string can be reliably reconstructed.
const groupTokens = tokens => {
  const tokensSize = tokens.length

  let line
  const lines = [(line = [])]

  for (let i = 0; i < tokensSize; i++) {
    const token = tokens[i]

    if (typeof token !== 'string') {
      // Tokens are directly pushed onto the current line
      line.push(token)
    } else {
      // Plain strings are split by newlines
      const parts = token.split(newlineRe)
      const partsSize = parts.length

      // For each part the current line must be ended and a new line must be started
      for (let j = 0; j < partsSize; j += 2) {
        const part = parts[j]
        const nextPart = parts[j + 1]

        // Plain string tokens are marked using the "plain" token
        line.push({
          type: 'plain',
          content: part,
          length: part.length + (nextPart !== undefined ? nextPart.length : 0)
        })

        // The last part doesn't require a new line
        if (nextPart !== undefined) {
          lines.push((line = []))
        }
      }
    }
  }

  return lines
}

export const tokenize = (code, language) => {
  // Take grammar from Prism's languages and call its "tokenize" fn
  const grammar = languages[language]
  const tokens = prismTokenize(code, grammar, language)
  return groupTokens(tokens)
}
