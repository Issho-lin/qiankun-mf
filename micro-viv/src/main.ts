/*
 * @Author: linqibin
 * @Date: 2022-09-08 09:53:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:17:16
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any = null;

function render(props: any = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

renderWithQiankun({
  bootstrap() {
    console.log("[micro-viv] vue app bootstraped");
  },
  mount(props) {
    render(props);
    app.config.globalProperties.$onGlobalStateChange =
      props.onGlobalStateChange;
    app.config.globalProperties.$setGlobalState = props.setGlobalState;
    console.log("[micro-viv] vue app mount", props);
  },
  unmount(props) {
    console.log("[micro-viv] vue app unmount", props);
    app.unmount();
    app._container.innerHTML = "";
    app = null;
  },
  update() {
    console.log("[micro-viv] vue app update");
  },
});
