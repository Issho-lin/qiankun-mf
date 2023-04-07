/*
 * @Author: linqibin
 * @Date: 2022-09-07 17:01:21
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:15:02
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import "./public-path"; // 一定要写在最顶部
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

let root = null;

function render(props) {
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

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[micro-cra] react app bootstraped");
}

export async function mount(props) {
  console.log("[micro-cra] react app mount", props);
  render(props);
}

export async function unmount(props) {
  console.log("[micro-cra] react app unmount", props);
  root.unmount();
  root = null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
