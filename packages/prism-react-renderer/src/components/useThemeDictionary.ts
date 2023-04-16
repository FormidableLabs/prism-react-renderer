import { Language, PrismTheme } from "../types"
import { useEffect, useRef, useState } from "react"
import themeToDict, { ThemeDict } from "../utils/themeToDict"

export const useThemeDictionary = (language: Language, theme: PrismTheme) => {
  const [themeDictionary, setThemeDictionary] = useState<ThemeDict>(
    themeToDict(theme, language)
  )
  const previousTheme = useRef<PrismTheme>()
  const previousLanguage = useRef<Language>()

  useEffect(() => {
    if (
      theme !== previousTheme.current ||
      language !== previousLanguage.current
    ) {
      previousTheme.current = theme
      previousLanguage.current = language
      setThemeDictionary(themeToDict(theme, language))
    }
  }, [language, theme])

  return themeDictionary
}
