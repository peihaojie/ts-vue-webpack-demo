/*
 * @Date         : 2020-03-24 11:50:48
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-27 13:50:25
 * @FilePath     : \webpack\webpack.dev.js
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    port: "8080",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  performance: {
    hints: false
  },
});
