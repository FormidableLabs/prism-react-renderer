// @flow

import type { Key } from 'react'
import includedLangs from "./vendor/prism/includeLangs"

export type Language = $Keys<typeof includedLangs>

type PrismGrammar = {
  [key: string]: mixed
};

type LanguagesDict = {
  [lang: Language]: PrismGrammar
}

export type Token = {
  type: string,
  content: string,
  greedy?: boolean,
  length: number,
}

export type PrismLib = {
  languages: LanguagesDict,
  tokenize: (
    code: string,
    grammar: PrismGrammar,
    language: Language
  ) => Array<Token | string>,
  highlight: (
    code: string,
    grammar: PrismGrammar,
    language: Language
  ) => string,
}

export type StyleObj = {
  [key: string]: string | number | null
}

export type LineInputProps = {
  key?: Key,
  style?: StyleObj,
  className?: string,
  line: Token[]
}

export type LineOutputProps = {
  key?: Key,
  style?: StyleObj,
  className: string
}

export type TokenInputProps = {
  key?: Key,
  style?: StyleObj,
  className?: string,
  token: Token
}

export type TokenOutputProps = {
  key?: Key,
  style?: StyleObj,
  className: string,
  children: string
}

export type RenderProps = {
  tokens: Token[][],
  className: string,
  getLineProps: (input: LineInputProps) => LineOutputProps,
  getTokenProps: (input: TokenInputProps) => TokenOutputProps
}

export type PrismThemeEntry = {
  color?: string,
  backgroundColor?: string,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through',
  opacity?: number,
  [styleKey: string]: string | number | void
}

export type PrismTheme = {
  plain: PrismThemeEntry,
  styles: Array<{
    types: string[],
    style: PrismThemeEntry,
    languages?: Language[]
  }>
}
