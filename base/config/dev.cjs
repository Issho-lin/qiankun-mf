/*
 * @Author: linqibin
 * @Date: 2022-09-07 08:53:07
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 16:28:02
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */

const { merge } = require("webpack-merge");

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const config = {
  mode: "development",
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
};
module.exports = merge(require("./index.cjs"), config);
