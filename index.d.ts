declare module "prism-react-renderer" {
  import * as React from "react";

  type Language =
    | "plain"
    | "plaintext"
    | "text"
    | "txt"
    | "extend"
    | "insertBefore"
    | "DFS"
    | "markup"
    | "html"
    | "mathml"
    | "svg"
    | "xml"
    | "ssml"
    | "atom"
    | "rss"
    | "bash"
    | "shell"
    | "clike"
    | "c"
    | "cpp"
    | "css"
    | "javascript"
    | "js"
    | "coffeescript"
    | "coffee"
    | "yaml"
    | "yml"
    | "markdown"
    | "md"
    | "graphql"
    | "sql"
    | "typescript"
    | "ts"
    | "jsx"
    | "diff"
    | "git"
    | "go"
    | "markup-templating"
    | "handlebars"
    | "hbs"
    | "json"
    | "webmanifest"
    | "less"
    | "makefile"
    | "objectivec"
    | "objc"
    | "ocaml"
    | "python"
    | "py"
    | "reason"
    | "sass"
    | "scss"
    | "stylus"
    | "tsx"
    | "wasm";

  type PrismGrammar = {
    [key: string]: any;
  };

  type LanguageDict = { [lang in Language]: PrismGrammar };

  type PrismLib = {
    languages: LanguageDict;
    tokenize: (
      code: string,
      grammar: PrismGrammar,
      language: Language
    ) => PrismToken[] | string[];
    highlight: (
      code: string,
      grammar: PrismGrammar,
      language: Language
    ) => string;
  };

  type PrismThemeEntry = {
    color?: string;
    backgroundColor?: string;
    fontStyle?: "normal" | "italic";
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
      | "900";
    textDecorationLine?:
      | "none"
      | "underline"
      | "line-through"
      | "underline line-through";
    opacity?: number;
    [styleKey: string]: string | number | void;
  };

  type PrismTheme = {
    plain: PrismThemeEntry;
    styles: Array<{
      types: string[];
      style: PrismThemeEntry;
      languages?: Language[];
    }>;
  };

  type ThemeDict = {
    root: StyleObj;
    plain: StyleObj;
    [type: string]: StyleObj;
  };

  type Token = {
    types: string[];
    content: string;
    empty?: boolean;
  };

  type PrismToken = {
    type: string;
    content: Array<PrismToken | string> | string;
  };

  type StyleObj = {
    [key: string]: string | number | null;
  };

  type LineInputProps = {
    key?: React.Key;
    style?: StyleObj;
    className?: string;
    line: Token[];
    [otherProp: string]: any;
  };

  type LineOutputProps = {
    key?: React.Key;
    style?: StyleObj;
    className: string;
    [otherProps: string]: any;
  };

  type TokenInputProps = {
    key?: React.Key;
    style?: StyleObj;
    className?: string;
    token: Token;
    [otherProp: string]: any;
  };

  type TokenOutputProps = {
    key?: React.Key;
    style?: StyleObj;
    className: string;
    children: string;
    [otherProp: string]: any;
  };

  type RenderProps = {
    tokens: Token[][];
    className: string;
    style: StyleObj;
    getLineProps: (input: LineInputProps) => LineOutputProps;
    getTokenProps: (input: TokenInputProps) => TokenOutputProps;
  };

  type DefaultProps = {
    Prism: PrismLib;
    theme: PrismTheme;
  };

  interface HighlightProps {
    Prism: PrismLib;
    theme?: PrismTheme;
    language: Language;
    code: string;
    children: (props: RenderProps) => React.ReactNode;
  }

  export default class Highlight extends React.Component<HighlightProps> {
    themeDict: ThemeDict;
    getLineProps: (lineInputProps: LineInputProps) => LineOutputProps;
    getStyleForToken: (token: Token) => { [inlineStyle: string]: string };
    getTokenProps: (tokenInputPropsL: TokenInputProps) => TokenOutputProps;
  }

  export const defaultProps: DefaultProps;

  export const Prism: PrismLib;

  export { Language, DefaultProps, PrismTheme };
}

declare module "prism-react-renderer/themes/*" {
  import { PrismTheme } from "prism-react-renderer";
  const theme: PrismTheme;
  export default theme;
}
