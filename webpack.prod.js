const webpack = require("webpack");
const path = require("path");
const reactExternal = {
  root: "React",
  commonjs2: "react",
  commonjs: "react",
  amd: "react"
};
module.exports = {
  entry: ["./src/index.js"],
  externals: {
    react: reactExternal
  },
  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
