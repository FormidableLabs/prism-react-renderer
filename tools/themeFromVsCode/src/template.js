const makeOutput = styles => `
// @flow
// Converted automatically using ./tools/themeFromVsCode

import type { PrismTheme } from '../types'

var theme: PrismTheme = ${JSON.stringify(styles, null, 2)};

module.exports = theme;
`.trim() + '\n';

module.exports = { makeOutput };
