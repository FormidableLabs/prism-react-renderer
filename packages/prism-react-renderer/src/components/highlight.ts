import Prism from "prismjs"
import vsDark from "../themes/vsDark"
import { HighlightProps, PrismLib } from "../types"
import { useThemeDictionary } from "./useThemeDictionary"
import { useGetLineProps } from "./useGetLineProps"
import { useGetTokenProps } from "./useGetTokenProps"
import { useTokenize } from "./useTokenize"

export const Highlight = ({
  children,
  language,
  code,
  theme = vsDark,
  prism = Prism as PrismLib,
}: HighlightProps) => {
  const themeDictionary = useThemeDictionary(language, theme)
  const getLineProps = useGetLineProps(themeDictionary)
  const getTokenProps = useGetTokenProps(themeDictionary)
  const grammar = prism.languages[language]
  const tokens = useTokenize({ prism, language, code, grammar })

  return children({
    tokens,
    className: `prism-code language-${language}`,
    style: themeDictionary != null ? themeDictionary.root : {},
    getLineProps,
    getTokenProps,
  })
}
