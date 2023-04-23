import { Prism } from "./prism-langs"
import * as themes from "./themes"
import { createElement } from "react"
import { Highlight as InternalHighlight } from "./components/highlight"
import { HighlightProps, PrismLib } from "./types"

/**
 * Prism React Renderer requires this specific instance
 * of Prism provided to ensure the languages are correctly loaded
 */
const Highlight = (props: HighlightProps) =>
  createElement(InternalHighlight, {
    prism: Prism as PrismLib,
    theme: themes.vsDark,
    ...props,
  })
export { Highlight, Prism, themes }
