import { Prism } from "./prism-langs"
import * as themes from "./themes"
import { createElement } from "react"
import { Highlight as InternalHighlight } from "./components/highlight"
import { HighlightProps, PrismLib } from "./types"
import normalizeTokens from "./utils/normalizeTokens"
import { useTokenize } from "./components/useTokenize"
export * from "./types"

/**
 * Prism React Renderer requires this specific instance
 * of Prism provided to ensure the languages are correctly loaded
 */
const Highlight = (props: HighlightProps) =>
  createElement(InternalHighlight, {
    ...props,
    prism: props.prism || (Prism as PrismLib),
    theme: props.theme || themes.vsDark,
    code: props.code,
    language: props.language,
  })

export { Highlight, Prism, themes, normalizeTokens, useTokenize }
