/*
 * @Date         : 2020-03-24 11:50:58
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-24 18:14:06
 * @FilePath     : /webpack/webpack.prod.js
 */
const merge = require("webpack-merge");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  plugins: [
    // new UglifyJSPlugin()
  ]
});