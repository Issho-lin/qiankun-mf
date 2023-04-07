/*
 * @Author: linqibin
 * @Date: 2022-09-09 08:48:08
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 17:14:22
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
import { defineConfig } from 'umi';

const { name } = require('./package.json');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/home',
          component: '@/pages/home',
        },
        {
          path: '/about',
          component: '@/pages/about',
        },
      ],
    },
  ],
  fastRefresh: {},
  publicPath: '/',
  runtimePublicPath: true,
  mountElementId: `${name}-id`,
  // base: `/${name}`,
  qiankun: {
    slave: {},
  },
});
