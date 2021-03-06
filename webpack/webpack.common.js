/*
 * @Date         : 2020-03-24 11:50:37
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-26 20:24:02
 * @FilePath     : \webpack\webpack.common.js
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, "..", dir);
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.ts"
  },
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `style/[name]_[contenthash:8].css`,
      chunkFilename: `style/[name]_[id]_[contenthash:8].css`
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  output: {
    filename: "js/[name]_[hash:8].js",
    chunkFilename: `js/[name]_[id]_[hash:8].js`,
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [{
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          limit: 5000, //如果小于则以base64位显示，大于这个则以图片路径显示
          name: "images/[name]_[hash:7].[ext]" //让图片都打包到images文件夹下
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
        use: [
          {
            loader: process.env.NODE_ENV === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV === 'development' ? true : false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js" // 这个得在项目根目录创建此文件
              }
            }
          },
          // {
          //   loader: "stylus-loader",
          //   options: {
          //     modules: {
          //       // 重新生成的 css 类名
          //       localIdentName: "[name]__[local]--[hash:base64:5]"
          //     }
          //   }
          // }
          "stylus-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
        exclude: /node_modules/
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
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name]_[hash:7].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      //确定vue的构建版本
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      components: resolve("src/components"),
      pages: resolve("src/pages"),
      store: resolve("src/store"),
      style: resolve("src/style"),
      views: resolve("src/views"),
      static: resolve("src/static")
    },
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: [".ts", ".js"]
  },
  performance: {
    hints: "warning"
  }
};