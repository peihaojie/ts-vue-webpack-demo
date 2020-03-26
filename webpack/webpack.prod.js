/*
 * @Date         : 2020-03-24 11:50:58
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-26 20:16:07
 * @FilePath     : \webpack\webpack.prod.js
 */
const merge = require("webpack-merge");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require("./webpack.common.js");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin()
  ]
});