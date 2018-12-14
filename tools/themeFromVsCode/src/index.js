const { writeFileSync, readFileSync } = require('fs');
const JSON5 = require('json5');
const { collectAllSettings } = require('./collectStyles');
const { makeOutput } = require('./template');

// Input
const themeString = readFileSync('./theme.json');
const theme = JSON5.parse(themeString);

const prismTheme = collectAllSettings(theme.tokenColors);

const json = {
  plain: {
    color: theme.colors['editor.foreground'],
    backgroundColor: theme.colors['editor.background'],
  },
  ...prismTheme,
};

const output = makeOutput(json);

writeFileSync('./outputTheme.js', output);
