/*
 * @Author: linqibin
 * @Date: 2022-09-08 09:04:54
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-08 09:42:29
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/micro-vcli" : "/"
  ),
  routes,
});

export default router;
