import { Key, CSSProperties, Component } from 'react';
import Prism, { Token as Token$1 } from 'prismjs';
export { default as Prism } from 'prismjs';

type Language = string;
type PrismGrammar = Record<string, unknown>;
type LanguagesDict = Record<Language, PrismGrammar>;
type PrismLib = {
    languages: LanguagesDict;
    tokenize: (code: string, grammar: PrismGrammar) => Array<Token$1 | string>;
    highlight: (code: string, grammar: PrismGrammar, language: Language) => string;
    hooks: {
        run: (name: string, env: {
            code: string;
            grammar: PrismGrammar;
            language: Language;
        }) => void;
    };
};
type Token = {
    types: string[];
    content: string;
    empty?: boolean;
};
type StyleObj = CSSProperties;
type LineInputProps = {
    style?: StyleObj;
    className?: string;
    line: Token[];
    [key: string]: unknown;
};
type LineOutputProps = {
    style?: StyleObj;
    className: string;
    [key: string]: unknown;
};
type TokenInputProps = {
    key?: Key;
    style?: StyleObj;
    className?: string;
    token: Token;
    [key: string]: unknown;
};
type TokenOutputProps = {
    key?: Key;
    style?: StyleObj;
    className: string;
    children: string;
    [key: string]: unknown;
};
type RenderProps = {
    tokens: Token[][];
    className: string;
    style: CSSProperties;
    getLineProps: (input: LineInputProps) => LineOutputProps;
    getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};
type PrismThemeEntry = {
    color?: string;
    cursor?: string;
    background?: string;
    backgroundImage?: string;
    backgroundColor?: string;
    textShadow?: string;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    opacity?: number;
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

type Props = {
    Prism: PrismLib;
    theme?: PrismTheme;
    language: Language;
    code: string;
    children: (props: RenderProps) => JSX.Element;
};
declare class Highlight extends Component<Props, unknown> {
    prevTheme?: PrismTheme;
    prevLanguage?: Language;
    themeDict?: ThemeDict;
    getThemeDict: (props: Props) => ThemeDict | void;
    getLineProps: ({ className, style, ...rest }: LineInputProps) => LineOutputProps;
    getStyleForToken: ({ types, empty }: Token) => any;
    getTokenProps: ({ key, className, style, token, ...rest }: TokenInputProps) => TokenOutputProps;
    tokenize: (Prism: PrismLib, code: string, grammar: PrismGrammar, language: Language) => Array<Token$1 | string>;
    render(): JSX.Element;
}

declare const theme$d: PrismTheme;

declare const theme$c: PrismTheme;

declare const theme$b: PrismTheme;

declare const theme$a: PrismTheme;

declare const theme$9: PrismTheme;

declare const theme$8: PrismTheme;

declare const theme$7: PrismTheme;

declare const theme$6: PrismTheme;

declare const theme$5: PrismTheme;

declare const theme$4: PrismTheme;

declare const theme$3: PrismTheme;

declare const theme$2: PrismTheme;

declare const theme$1: PrismTheme;

declare const theme: PrismTheme;

declare namespace index {
  export {
    theme$d as dracula,
    theme$c as duotoneDark,
    theme$b as duotoneLight,
    theme$a as github,
    theme$9 as nightOwl,
    theme$8 as nightOwlLight,
    theme$7 as oceanicNext,
    theme$6 as okaidia,
    theme$5 as palenight,
    theme$4 as shadesOfPurple,
    theme$3 as synthwave84,
    theme$2 as ultramin,
    theme$1 as vsDark,
    theme as vsLight,
  };
}

declare const defaultProps: {
    Prism: typeof Prism;
    theme: PrismTheme;
};

export { Highlight as default, defaultProps, index as themes };
