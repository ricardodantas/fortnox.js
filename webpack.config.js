const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'fortnoxab-api-js-client.js',
    path: path.resolve(__dirname, 'lib')
  }
};
