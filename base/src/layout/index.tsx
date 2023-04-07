/*
 * @Author: linqibin
 * @Date: 2022-09-01 14:07:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-07 16:56:23
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import { ProLayout } from "@ant-design/pro-components";
import { Link, useLocation } from "react-router-dom";
import menu from "./menu";

const Layout: React.FC = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  return (
    <div style={{ height: "100vh" }}>
      <ProLayout
        {...menu}
        logo="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg"
        title="微前端主应用"
        location={{ pathname }}
        menuItemRender={(item, dom) => {
          return <Link to={item.path || "/"}>{dom}</Link>;
        }}
      >
        <div id="container">{/* <Outlet /> */}</div>
      </ProLayout>
    </div>
  );
};

export default Layout;
