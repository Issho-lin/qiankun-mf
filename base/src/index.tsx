/*
 * @Author: linqibin
 * @Date: 2022-09-07 15:52:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 16:54:33
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import registerMicroApps from "./register";

registerMicroApps();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
