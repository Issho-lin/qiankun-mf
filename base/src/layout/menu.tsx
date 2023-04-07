/*
 * @Author: linqibin
 * @Date: 2022-09-01 14:10:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 09:05:02
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import React from "react";
import { ReadOutlined, AntDesignOutlined } from "@ant-design/icons";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/micro-vcli",
        name: "vue-cli子应用",
        icon: <ReadOutlined />,
      },
      {
        path: "/micro-cra",
        name: "cra子应用",
        icon: <AntDesignOutlined />,
      },
      {
        path: "/micro-viv",
        name: "vite-vue子应用",
        icon: <ReadOutlined />,
      },
      {
        path: "/micro-vir",
        name: "vite-react子应用",
        icon: <AntDesignOutlined />,
      },
      {
        path: "/micro-umi",
        name: "umi子应用",
        icon: <ReadOutlined />,
      },
    ],
  },
};
