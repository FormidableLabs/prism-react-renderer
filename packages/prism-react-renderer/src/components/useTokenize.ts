import { EnvConfig, Language, PrismGrammar, PrismLib } from "../types"
import normalizeTokens from "../utils/normalizeTokens"
import { useMemo, useRef } from "react"

type Options = {
  prism: PrismLib
  code: string
  grammar?: PrismGrammar
  language: Language
}

export const useTokenize = ({ prism, code, grammar, language }: Options) => {
  const prismRef = useRef(prism)
  return useMemo(() => {
    if (grammar == null) return normalizeTokens([code])

    const prismConfig: EnvConfig = {
      code,
      grammar,
      language,
      tokens: [],
    }

    prismRef.current.hooks.run("before-tokenize", prismConfig)
    prismConfig.tokens = prismRef.current.tokenize(code, grammar)
    prismRef.current.hooks.run("after-tokenize", prismConfig)
    return normalizeTokens(prismConfig.tokens)
  }, [code, grammar, language])
}
