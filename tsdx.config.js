const postcss = require('rollup-plugin-postcss');
module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        modules: true,
      })
    );
    return config;
  },
};
