/*
 * @Author: linqibin
 * @Date: 2022-09-07 11:08:11
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 14:59:09
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { registerMicroApps, start } from "qiankun";

export default function () {
  registerMicroApps([
    {
      name: "vueApp",
      entry: "//localhost:8080",
      container: "#container",
      activeRule: "/micro-vcli",
    },
    {
      name: "micro-cra",
      entry: "//localhost:3001",
      container: "#container",
      activeRule: "/micro-cra",
    },
    {
      name: "micro-viv",
      entry: "//localhost:5173",
      container: "#container",
      activeRule: "/micro-viv",
    },
    {
      name: "micro-vir",
      entry: "//localhost:5174",
      container: "#container",
      activeRule: "/micro-vir",
    },
    {
      name: "micro-umi",
      entry: "//localhost:8000",
      container: "#container",
      activeRule: "/micro-umi",
    },
  ]);

  start();
}
