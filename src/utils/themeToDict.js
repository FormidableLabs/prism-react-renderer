// @flow

import type { Language, StyleObj, PrismTheme, PrismThemeEntry } from "../types";

export type ThemeDict = {
  root: StyleObj,
  plain: StyleObj,
  [type: string]: StyleObj,
};

const themeToDict = (
  theme: PrismTheme,
  language: Language,
  rootStyles?: StyleObj
): ThemeDict => {
  const { plain } = theme;

  // $FlowFixMe
  const base: ThemeDict = Object.create(null);

  const themeDict = theme.styles.reduce((acc, themeEntry) => {
    const { types, languages, style } = themeEntry;
    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach((type) => {
      // $FlowFixMe
      acc[type] = { ...acc[type], ...style };
    });

    return acc;
  }, base);

  // $FlowFixMe
  themeDict.root = ((rootStyles
    ? { ...rootStyles, ...plain }
    : plain): StyleObj);
  // $FlowFixMe
  themeDict.plain = ({ ...plain, backgroundColor: null }: StyleObj);

  return themeDict;
};

export default themeToDict;
