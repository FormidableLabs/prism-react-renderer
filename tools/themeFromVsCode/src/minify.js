const isEqual = require('is-equal');

const minify = styles => {
  const output = [];

  styles.forEach(style => {
    const item = output.find(x => {
      return isEqual(style.settings, x.style);
    });

    if (!item) {
      output.push({
        types: [style.scope],
        style: style.settings
      });
    } else {
      item.types.push(style.scope);
    }
  });

  return output;
};

module.exports = { minify };
