import { EnvConfig, Language, PrismGrammar, PrismLib } from "../types"
import normalizeTokens from "../utils/normalizeTokens"
import { useMemo } from "react"

type Options = {
  prism: PrismLib
  code: string
  grammar?: PrismGrammar
  language: Language
}

export const useTokenize = ({ prism, code, grammar, language }: Options) => {
  return useMemo(() => {
    if (grammar == null) return normalizeTokens([code])

    const prismConfig: EnvConfig = {
      code,
      grammar,
      language,
      tokens: [],
    }

    prism.hooks.run("before-tokenize", prismConfig)
    prismConfig.tokens = prism.tokenize(code, grammar)
    prism.hooks.run("after-tokenize", prismConfig)
    return normalizeTokens(prismConfig.tokens)
  }, [
    code,
    grammar,
    language,
    // prism is a stable import
    prism,
  ])
}
