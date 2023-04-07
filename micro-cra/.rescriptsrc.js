/*
 * @Author: linqibin
 * @Date: 2022-09-07 17:17:27
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 17:38:58
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = "window";

    return config;
  },

  devServer: (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.static.watch = false;
    config.liveReload = false;
    return config;
  },
};
