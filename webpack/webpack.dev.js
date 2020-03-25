/*
 * @Date         : 2020-03-24 11:50:48
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-24 18:13:58
 * @FilePath     : /webpack/webpack.dev.js
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    port: "8080"
  }
});
