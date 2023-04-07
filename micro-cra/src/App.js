/*
 * @Author: linqibin
 * @Date: 2022-09-07 17:01:21
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 17:17:22
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/micro-cra" : "/"}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                  <Link to="/home">首页</Link> |<Link to="/user">用户</Link>
                </div>
                <div>
                  <Outlet />
                </div>
              </header>
            </div>
          }
        >
          <Route path="/home" element={<div>这是首页</div>} />
          <Route path="/user" element={<div>这是用户中心</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
