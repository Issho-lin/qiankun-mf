/*
 * @Author: linqibin
 * @Date: 2022-09-07 18:25:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-08 08:46:06
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
