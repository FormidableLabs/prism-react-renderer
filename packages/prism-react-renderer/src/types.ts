import type { CSSProperties } from "react"
import type { Token as PrismToken } from "prismjs"

export type Language = string
export type PrismGrammar = Record<string, unknown>
type LanguagesDict = Record<Language, PrismGrammar>

export type PrismLib = {
  languages: LanguagesDict
  tokenize: (code: string, grammar: PrismGrammar) => Array<PrismToken | string>
  highlight: (code: string, grammar: PrismGrammar, language: Language) => string
  hooks: {
    run: (
      name: string,
      env: {
        code: string
        grammar: PrismGrammar
        language: Language
      }
    ) => void
  }
}

export type Token = {
  types: string[]
  content: string
  empty?: boolean
}

export type EnvConfig = {
  code: string
  grammar: PrismGrammar
  language: Language
  tokens: (string | PrismToken)[]
}

export type StyleObj = CSSProperties

export type LineInputProps = {
  style?: StyleObj
  className?: string
  line: Token[]
  [key: string]: unknown
}
export type LineOutputProps = {
  style?: StyleObj
  className: string
  [key: string]: unknown
}
export type TokenInputProps = {
  style?: StyleObj
  className?: string
  token: Token
  [key: string]: unknown
}
export type TokenOutputProps = {
  style?: StyleObj
  className: string
  children: string
  [key: string]: unknown
}
export type InternalHighlightProps = {
  prism: PrismLib
  theme: PrismTheme
  language: Language
  code: string
  children: (props: RenderProps) => JSX.Element
}
export type HighlightProps = {
  prism?: PrismLib
  theme?: PrismTheme
  language: Language
  code: string
  children: (props: RenderProps) => JSX.Element
}
export type RenderProps = {
  tokens: Token[][]
  className: string
  style: CSSProperties
  getLineProps: (input: LineInputProps) => LineOutputProps
  getTokenProps: (input: TokenInputProps) => TokenOutputProps
}
export type PrismThemeEntry = {
  color?: string
  cursor?: string
  background?: string
  backgroundImage?: string
  backgroundColor?: string
  textShadow?: string
  fontStyle?: "normal" | "italic"
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
  opacity?: number
}
export type PrismTheme = {
  plain: PrismThemeEntry
  styles: Array<{
    types: string[]
    style: PrismThemeEntry
    languages?: Language[]
  }>
}
