/*
 * @Author: linqibin
 * @Date: 2022-09-08 14:12:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:18:27
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root: ReactDOM.Root | null = null;

function render(props: any) {
  const { container } = props;
  const dom = container
    ? container.querySelector("#app")
    : document.querySelector("#app");
  root = ReactDOM.createRoot(dom);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

renderWithQiankun({
  bootstrap() {
    console.log("[micro-vir] react app bootstraped");
  },
  mount(props) {
    console.log("[micro-vir] react app mount", props);
    render(props);
  },
  unmount(props) {
    console.log("[micro-vir] react app unmount", props);
    root?.unmount();
    root = null;
  },
  update() {
    console.log("[micro-vir] react app update");
  },
});
