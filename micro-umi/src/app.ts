/*
 * @Author: linqibin
 * @Date: 2022-09-09 09:07:20
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 16:41:42
 * @Description:
 *
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved.
 */
// @ts-nocheck
if (window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__?.iframeReady) {
  window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__MASTER__ = {
    iframeReady: window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady,
  };
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('umi app bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log(
      'umi app mount',
      props,
      window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__,
    );
    window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = {
      // iframeReady: () => window.location.reload()
      iframeReady:
        window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__MASTER__.iframeReady,
    };
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('umi app unmount', props);
  },
};
