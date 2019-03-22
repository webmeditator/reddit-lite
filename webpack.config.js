const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  resolve: { alias: { mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js" }},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html'
    })
  ]
};