/*
 * @Date         : 2020-03-24 11:50:37
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-24 17:38:41
 * @FilePath     : /webpack/webpack.common.js
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new VueLoaderPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["vue-style-loader", "css-loader", "postcss-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/, // 被 test 匹配的文件都会被 babel 编译
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  resolve: {
    alias: {
      //确定vue的构建版本
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    },
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: [".ts", ".js"]
  }
};
