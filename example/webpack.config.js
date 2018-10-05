const HtmlWebPackPlugin = require("html-webpack-plugin");
const aliases = require('./aliases.js');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { babelrcRoots: ['.', '../'] }, // <-- this line fixed it!
      }
    ]
  },
    resolve: {
    alias: aliases,
  },
  plugins: [htmlWebpackPlugin]
};