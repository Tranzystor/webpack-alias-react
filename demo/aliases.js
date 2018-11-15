const path = require("path");

module.exports = {
  alias: {
    "webpack-alias-react": path.resolve(__dirname, "../src")
  },
  extensions: [".js", ".jsx", ".json"],
  modules: [path.join(__dirname, "./"), "node_modules"]
};
