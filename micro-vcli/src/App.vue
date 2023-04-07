<!--
 * @Author: linqibin
 * @Date: 2022-09-07 18:25:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 14:12:57
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div>
    <router-link to="/"> 首页 </router-link> |
    <router-link to="/about"> 关于 </router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
