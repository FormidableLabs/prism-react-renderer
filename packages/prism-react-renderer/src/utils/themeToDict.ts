import type { Language, StyleObj, PrismTheme } from "../types"
export type ThemeDict = {
  root: StyleObj
  plain: StyleObj
  [type: string]: StyleObj
}

const themeToDict = (theme: PrismTheme, language: Language): ThemeDict => {
  const { plain } = theme
  const themeDict = theme.styles.reduce<ThemeDict>((acc, themeEntry) => {
    const { languages, style } = themeEntry

    if (languages && !languages.includes(language)) {
      return acc
    }

    themeEntry.types.forEach(type => {
      const accStyle: StyleObj = { ...acc[type], ...style }
      acc[type] = accStyle
    })
    return acc
  }, {} as ThemeDict)

  themeDict.root = plain as StyleObj
  themeDict.plain = { ...plain, backgroundColor: undefined } as StyleObj
  return themeDict
}

export default themeToDict
