// @flow

import React, { Component, type Node } from "react";
import normalizeTokens from "../utils/normalizeTokens";
import themeToDict, { type ThemeDict } from "../utils/themeToDict";

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
  PrismToken,
} from "../types";

type Props = {
  Prism: PrismLib,
  theme?: PrismTheme,
  language: Language,
  code: string,
  children: (props: RenderProps) => Node,
};

class Highlight extends Component<Props, *> {
  prevTheme: PrismTheme | void;
  prevLanguage: Language | void;
  themeDict: ThemeDict | void;

  getThemeDict = (props: Props): ThemeDict | void => {
    const language = props.language.toLowerCase();
    if (
      this.themeDict !== undefined &&
      props.theme === this.prevTheme &&
      language === this.prevLanguage
    ) {
      return this.themeDict;
    }

    this.prevTheme = props.theme;
    this.prevLanguage = language;

    const themeDict = props.theme
      ? themeToDict(props.theme, language)
      : undefined;
    return (this.themeDict = themeDict);
  };

  getLineProps = ({
    key,
    className,
    style,
    line,
    ...rest
  }: LineInputProps): LineOutputProps => {
    const output: LineOutputProps = {
      ...rest,
      className: "token-line",
      style: undefined,
      key: undefined,
    };

    const themeDict = this.getThemeDict(this.props);
    if (themeDict !== undefined) {
      output.style = themeDict.plain;
    }

    if (style !== undefined) {
      output.style =
        output.style !== undefined ? { ...output.style, ...style } : style;
    }

    if (key !== undefined) output.key = key;
    if (className) output.className += ` ${className}`;

    return output;
  };

  getStyleForToken = ({ types, empty }: Token) => {
    const typesSize = types.length;
    const themeDict = this.getThemeDict(this.props);

    if (themeDict === undefined) {
      return undefined;
    } else if (typesSize === 1 && types[0] === "plain") {
      return empty ? { display: "inline-block" } : undefined;
    } else if (typesSize === 1 && !empty) {
      return themeDict[types[0]];
    }

    const baseStyle = empty ? { display: "inline-block" } : {};
    // $FlowFixMe
    const typeStyles = types.map((type) => themeDict[type]);
    return Object.assign(baseStyle, ...typeStyles);
  };

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
    };

    if (style !== undefined) {
      output.style =
        output.style !== undefined ? { ...output.style, ...style } : style;
    }

    if (key !== undefined) output.key = key;
    if (className) output.className += ` ${className}`;

    return output;
  };

  tokenize = (
    Prism: PrismLib,
    code: string,
    grammar: PrismGrammar,
    language: Language
  ): Array<PrismToken | string> => {
    const env = {
      code,
      grammar,
      language,
      tokens: [],
    };

    Prism.hooks.run("before-tokenize", env);
    const tokens = (env.tokens = Prism.tokenize(env.code, env.grammar));
    Prism.hooks.run("after-tokenize", env);

    return tokens;
  };

  render(): Node {
    const { Prism, code, children } = this.props;
    const language = this.props.language.toLowerCase();

    const themeDict = this.getThemeDict(this.props);

    const grammar = Prism.languages[language];
    const mixedTokens =
      grammar !== undefined
        ? this.tokenize(Prism, code, grammar, language)
        : [code];
    const tokens = normalizeTokens(mixedTokens);

    return children({
      tokens,
      className: `prism-code language-${language}`,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps,
    });
  }
}

export default Highlight;
