import { Component } from "react"
import normalizeTokens from "../utils/normalizeTokens"
import type { ThemeDict } from "../utils/themeToDict"
import themeToDict from "../utils/themeToDict"
import type { Token as PrismToken } from "prismjs"
// import { loadLanguages } from "prismjs/components"
import type {
  Language,
  Token,
  LineInputProps,
  LineOutputProps,
  TokenInputProps,
  TokenOutputProps,
  RenderProps,
  PrismGrammar,
  PrismLib,
  PrismTheme,
  EnvConfig,
} from "../types"

type Props = {
  Prism: PrismLib
  theme?: PrismTheme
  language: Language
  code: string
  children: (props: RenderProps) => JSX.Element
}

// loadLanguages(["jsx"])

class Highlight extends Component<Props, unknown> {
  prevTheme?: PrismTheme
  prevLanguage?: Language
  themeDict?: ThemeDict
  getThemeDict = (props: Props): ThemeDict | void => {
    if (
      this.themeDict !== undefined &&
      props.theme === this.prevTheme &&
      props.language === this.prevLanguage
    ) {
      return this.themeDict
    }

    this.prevTheme = props.theme
    this.prevLanguage = props.language
    const themeDict = props.theme
      ? themeToDict(props.theme, props.language)
      : undefined
    return (this.themeDict = themeDict)
  }
  getLineProps = ({
    className,
    style,
    ...rest
  }: LineInputProps): LineOutputProps => {
    const output: LineOutputProps = {
      ...rest,
      className: "token-line",
      style: undefined,
      key: undefined,
    }
    const themeDict = this.getThemeDict(this.props)

    if (themeDict !== undefined) {
      output.style = themeDict.plain
    }

    if (style !== undefined) {
      output.style =
        output.style !== undefined ? { ...output.style, ...style } : style
    }

    if (className) output.className += ` ${className}`
    return output
  }
  getStyleForToken = ({ types, empty }: Token) => {
    const typesSize = types.length
    const themeDict = this.getThemeDict(this.props)

    if (themeDict === undefined) {
      return undefined
    } else if (typesSize === 1 && types[0] === "plain") {
      return empty
        ? {
            display: "inline-block",
          }
        : undefined
    } else if (typesSize === 1 && !empty) {
      return themeDict[types[0]]
    }

    const baseStyle = empty
      ? {
          display: "inline-block",
        }
      : {}
    const typeStyles = types.map((type: string) => themeDict[type])
    return Object.assign(baseStyle, ...typeStyles)
  }
  getTokenProps = ({
    key,
    className,
    style,
    token,
    ...rest
  }: TokenInputProps): TokenOutputProps => {
    const output: TokenOutputProps = {
      ...rest,
      className: `token ${token.types.join(" ")}`,
      children: token.content,
      style: this.getStyleForToken(token),
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
  tokenize = (
    Prism: PrismLib,
    code: string,
    grammar: PrismGrammar,
    language: Language
  ): Array<PrismToken | string> => {
    const env: EnvConfig = {
      code,
      grammar,
      language,
      tokens: [],
    }
    Prism.hooks.run("before-tokenize", env)
    const tokens = (env.tokens = Prism.tokenize(env.code, env.grammar))
    Prism.hooks.run("after-tokenize", env)
    return tokens
  }

  render() {
    const { Prism, language, code, children } = this.props
    const themeDict = this.getThemeDict(this.props)
    const grammar = Prism.languages[language]
    const mixedTokens =
      grammar !== undefined
        ? this.tokenize(Prism, code, grammar, language)
        : [code]
    const tokens = normalizeTokens(mixedTokens)
    return children({
      tokens,
      className: `prism-code language-${language}`,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps,
    })
  }
}

export default Highlight
