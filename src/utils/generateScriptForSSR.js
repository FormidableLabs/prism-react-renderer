// @flow

import themeWithCssVariables from "./themeWithCssVariables";
import type { PrismTheme } from "../types";

const generateScriptForSSR = (
  themes: PrismTheme[],
  getThemeIdFuncStr: string
): string =>
  `
try {
  const themeId = (${getThemeIdFuncStr})();
  
  const root = document.documentElement;
  
  ${themes
    .map(
      (theme) =>
        `if (themeId === '${theme.id || ""}') {
    ${Object.entries(themeWithCssVariables(theme).variables)
      .map(
        ([key, value]) =>
          // $FlowFixMe
          `root.style.setProperty('${key}', '${value || ""}');`
      )
      .join("\n" + " ".repeat(4))}
  }`
    )
    .join("\n\n" + " ".repeat(2))}
} catch (e) {
  console.error('Failed to set prism-react-renderer CSS variables');
  console.error(e);
}
`.trim();

export default generateScriptForSSR;
