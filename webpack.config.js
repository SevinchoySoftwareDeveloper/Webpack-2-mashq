const path = require("path"); //node js
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/App.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};
