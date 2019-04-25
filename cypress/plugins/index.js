// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserify = require('@cypress/browserify-preprocessor');

module.exports = on => {
  const options = {
    browserifyOptions: {
      extensions: ['.js', '.ts'],
      // we want tsify to use tsconfig.json from "./cypress"
      plugin: [['tsify', { p: 'cypress' }]],
    },
  };

  on('file:preprocessor', browserify(options));
};
