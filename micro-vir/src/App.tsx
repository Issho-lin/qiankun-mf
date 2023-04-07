/*
 * @Author: linqibin
 * @Date: 2022-09-08 14:12:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:21:27
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [DEV] = useState(import.meta.env.MODE === "development");

  return (
    <BrowserRouter
      basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? "/micro-vir" : "/"}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img
                    src={DEV ? "http://localhost:5174/vite.svg" : "/vite.svg"}
                    className="logo"
                    alt="Vite logo"
                  />
                </a>
                <a href="https://reactjs.org" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <div>
                <Link to="/home">首页666</Link> |<Link to="/user">用户</Link>
              </div>
              <div>
                <Outlet />
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
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
