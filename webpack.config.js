const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      apis: path.resolve(__dirname, 'src/apis'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        enforce: 'pre',
        test: '/\.js$/',
        loader: 'source-map-loader'
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Example',
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, './src/index.ejs')
    }),
  ]
};