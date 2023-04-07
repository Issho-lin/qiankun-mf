/*
 * @Author: linqibin
 * @Date: 2022-09-07 08:53:40
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 16:27:41
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index.html"),
      filename: "index.html",
      title: "微前端基座",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: { javascriptEnabled: true },
            },
          },
        ],
      },
    ],
  },
};
