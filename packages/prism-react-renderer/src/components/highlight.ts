import { InternalHighlightProps } from "../types"
import { useGetLineProps } from "./useGetLineProps"
import { useGetTokenProps } from "./useGetTokenProps"
import { useTokenize } from "./useTokenize"
import themeToDict from "../utils/themeToDict"

export const Highlight = ({
  children,
  language: _language,
  code,
  theme,
  prism,
}: InternalHighlightProps) => {
  const language = _language.toLowerCase()
  const themeDictionary = themeToDict(theme, language)
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
