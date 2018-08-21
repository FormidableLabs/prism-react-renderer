const color = require('color');

const transformSettings = settings => {
  const output = {};

  if (settings.foreground) {
    output.color = color(settings.foreground).string();
  }

  if (settings.background) {
    output.backgroundColor = color(settings.background).string();
  }

  if (settings.fontStyle === 'italic') {
    output.fontStyle = 'italic';
  }

  return output;
};

module.exports = { transformSettings };
