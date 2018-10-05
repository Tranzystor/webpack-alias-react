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
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
    resolve: {
    alias: aliases,
  },
  plugins: [htmlWebpackPlugin]
};