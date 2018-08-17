// @flow

import type { Language, StyleObj, PrismTheme, PrismThemeEntry } from "../types"

export type ThemeDict = {
  plain: StyleObj,
  [type: string]: StyleObj,
}

const themeToDict = (theme: PrismTheme, language: Language): ThemeDict => {
  const { plain } = theme

  const themeDict = theme.styles.reduce((acc, themeEntry) => {
    const { types, languages, style } = themeEntry
    if (languages && !languages.includes(language)) {
      return acc
    }

    themeEntry.types.forEach(type => {
      // $FlowFixMe
      const accStyle: StyleObj = { ...acc[type], ...style }

      acc[type] = accStyle
    })

    return acc
  }, {})

  // $FlowFixMe
  themeDict.plain = (plain: StyleObj)

  return themeDict
}

export default themeToDict
