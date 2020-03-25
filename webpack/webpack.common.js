/*
 * @Date         : 2020-03-24 11:50:37
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-25 19:46:20
 * @FilePath     : \webpack\webpack.common.js
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, "..", dir);
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new VueLoaderPlugin(),
    new ExtractTextWebpackPlugin({
      filename: `[name]_[md5:contenthash:hex:8].css`
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "less-loader" ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 5000, //如果小于则以base64位显示，大于这个则以图片路径显示
          outputPath: "images/" //让图片都打包到images文件夹下
        }
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
        loaders: ExtractTextWebpackPlugin.extract({
          fallback: "vue-style-loader",
          use: [
            {
              loader: "css-loader?minimize",
              options: {
                modules: {
                  // 重新生成的 css 类名
                  localIdentName: "[name]__[local]--[hash:base64:5]"
                }
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: "postcss.config.js" // 这个得在项目根目录创建此文件
                }
              }
            },
            "stylus-loader"
          ]
        }),
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      //确定vue的构建版本
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      components: resolve("src/components/"),
      pages: resolve("src/pages/"),
      store: resolve("src/store/"),
      style: resolve("src/style/"),
      views: resolve("src/views")
    },
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: [".ts", ".js"]
  },
  performance: {
    hints: "warning"
  }
};
