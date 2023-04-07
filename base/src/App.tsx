/*
 * @Author: linqibin
 * @Date: 2022-09-07 16:09:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 16:28:56
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React from "react";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.less";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>登录</div>} />
        <Route path="/*" element={<Layout />} />
        {/* <Route path="/" element={<Layout />}>
          <Route path="/app-vue" />
          <Route path="/app-react" />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
