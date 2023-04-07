/*
 * @Author: linqibin
 * @Date: 2022-09-08 14:12:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-08 16:13:14
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import path from "path";

const useDevMode = true;
const reactPlugin = useDevMode ? [] : [react()];

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
      port: 5174,
      origin: "//localhost:5174",
    },
    preview: {
      port: 4174,
    },
    base: __DEV__ ? "/" : "http://localhost:4174/",
    plugins: [
      ...reactPlugin,
      qiankun("micro-vir", {
        useDevMode: true,
      }),
    ],
  });
};
