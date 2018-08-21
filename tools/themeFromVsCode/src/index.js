const { writeFileSync } = require('fs');
const { collectAllSettings } = require('./collectStyles');
const { makeOutput } = require('./template');

// Input
const theme = require('../theme.json');
const prismTheme = collectAllSettings(theme.tokenColors);

const json = {
  plain: {
    color: theme.colors['editor.foreground'],
    backgroundColor: theme.colors['editor.background']
  },
  ...prismTheme
};

const output = makeOutput(json);

writeFileSync('./outputTheme.js', output);
