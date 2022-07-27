// @flow

import themeWithCssVariables from "./themeWithCssVariables";
import type { PrismTheme } from "../types";

const generateScriptForSSR = (
  themes: PrismTheme[],
  getThemeId: string
): string =>
  `
const themeId = (${getThemeId})();

if (!themeId) {
  return;
}

${themes
  .map(
    (theme) =>
      `if (themeId === '${theme.id || ""}') {
  ${Object.entries(themeWithCssVariables(theme).variables)
    .map(
      ([key, value]) =>
        // $FlowFixMe
        `root.style.setProperty(${key}, ${value || ""});`
    )
    .join("\n" + " ".repeat(2))}
}`
  )
  .join("\n\n")}
`.trim();

export default generateScriptForSSR;
