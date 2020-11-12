const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/compiler/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};