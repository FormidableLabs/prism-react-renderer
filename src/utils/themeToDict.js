// @flow

import type { Language, StyleObj, PrismTheme, PrismThemeEntry } from "../types";

export type ThemeDict = {
  root: StyleObj,
  plain: StyleObj,
  [type: string]: StyleObj
};

const themeToDict = (theme: PrismTheme, language: Language): ThemeDict => {
  const { plain } = theme;

  // $FlowFixMe
  const base: ThemeDict = Object.create(null);

  const themeDict = theme.styles.reduce((acc, themeEntry) => {
    const { types, languages, style } = themeEntry;
    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(type => {
      // $FlowFixMe
      const accStyle: StyleObj = { ...acc[type], ...style };

      acc[type] = accStyle;
    });

    return acc;
  }, base);

  // $FlowFixMe
  themeDict.root = (plain: StyleObj);
  // $FlowFixMe
  themeDict.plain = ({ ...plain, backgroundColor: null }: StyleObj);

  return themeDict;
};

export default themeToDict;
