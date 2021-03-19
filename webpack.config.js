const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    app: "./src/js/app.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "portfolio.html",
      template: "src/portfolio.html",
      chunks: ["exampleEntry"],
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: "src/blog.html",
      chunks: ["exampleEntry"],
    }),
    new HtmlWebpackPlugin({
      filename: "blog-wpis.html",
      template: "src/blog-wpis.html",
      chunks: ["exampleEntry"],
    }),
    new MiniCssExtractPlugin({
      filename: "styles/style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "./src/img"),
          to: path.join(__dirname, "./dist/img"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "../img/[name].[ext]", emitFile: false },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};

module.exports = config;
