/*
 * @Author: linqibin
 * @Date: 2022-09-07 18:25:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:16:22
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let app = null;

function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log("[micro-vcli] vue app bootstraped");
}
export async function mount(props) {
  console.log("[micro-vcli] vue app mount", props);
  render(props);
}
export async function unmount(props) {
  console.log("[micro-vcli] vue app unmount", props);
  app.unmount();
  app = null;
}
