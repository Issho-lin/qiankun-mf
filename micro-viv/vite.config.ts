/*
 * @Author: linqibin
 * @Date: 2022-09-08 09:53:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-08 16:12:10
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const __DEV__ = mode === "development";
  return defineConfig({
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      port: 5173,
      origin: "//localhost:5173",
    },
    preview: {
      port: 4173,
    },
    base: __DEV__ ? "/" : "http://localhost:4173/",
    plugins: [
      vue(),
      qiankun("micro-viv", {
        useDevMode: true,
      }),
    ],
  });
};
