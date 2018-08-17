// @flow

import React, { Component, type Node } from "react"
import normalizeTokens from "../utils/normalizeTokens"
import themeToDict, { type ThemeDict } from "../utils/themeToDict"

import type {
  Language,
  Token,
  LineInputProps,
  LineOutputProps,
  TokenInputProps,
  TokenOutputProps,
  RenderProps,
  PrismLib,
  PrismTheme,
} from "../types"

type Props = {
  Prism: PrismLib,
  theme?: PrismTheme,
  language: Language,
  code: string,
  children: (props: RenderProps) => Node,
}

class Highlight extends Component<Props, *> {
  themeDict: ThemeDict | void

  constructor(props: Props) {
    super(props)

    if (props.theme) {
      this.themeDict = themeToDict(props.theme, props.language)
    }
  }

  getLineProps = ({
    key,
    className,
    style,
    line,
  }: LineInputProps): LineOutputProps => {
    const output: LineOutputProps = {
      className: "token-line",
      style: undefined,
      key: undefined
    }

    if (this.themeDict !== undefined) {
      output.style = this.themeDict.plain
    }

    if (style !== undefined) {
      output.style =
        output.style !== undefined ? { ...output.style, ...style } : style
    }

    if (key !== undefined) output.key = key
    if (className) output.className += ` ${className}`

    return output
  }

  getStyleForTypes = (types: string[]) => {
    const typesSize = types.length

    if (this.themeDict === undefined) {
      return undefined
    } else if (typesSize === 1 && types[0] === 'plain') {
      return undefined
    } else if (typesSize === 1) {
      return this.themeDict[types[0]]
    }

    // $FlowFixMe
    return Object.assign({}, ...types.map(type => this.themeDict[type]))
  };

  getTokenProps = ({
    key,
    className,
    style,
    token,
  }: TokenInputProps): TokenOutputProps => {
    const output: TokenOutputProps = {
      className: `token ${token.types.join(' ')}`,
      children: token.content,
      style: this.getStyleForTypes(token.types),
      key: undefined,
    }

    if (style !== undefined) {
      output.style =
        output.style !== undefined ? { ...output.style, ...style } : style
    }

    if (key !== undefined) output.key = key
    if (className) output.className += ` ${className}`

    return output
  }

  render() {
    const { Prism, language, code, children } = this.props

    const grammar = Prism.languages[language]
    const mixedTokens = Prism.tokenize(code, grammar, language)
    const tokens = normalizeTokens(mixedTokens)

    return children({
      tokens,
      className: `prism-code language-${language}`,
      style: this.themeDict ? this.themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps,
    })
  }
}

export default Highlight
