const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  node: { process: false },
  output: {
    filename: 'fortnoxab-api-js-client.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
