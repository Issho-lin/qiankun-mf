<!--
 * @Author: linqibin
 * @Date: 2022-09-08 09:53:37
 * @LastEditors: linqibin
 * @LastEditTime: 2022-09-09 15:21:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
const DEV = ref(import.meta.env.MODE === 'development')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img :src="DEV ? 'http://localhost:5173/vite.svg' : '/vite.svg'" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <router-link to="/"> 首页 </router-link> |
    <router-link to="/about"> 关于 </router-link>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #0b0b0eaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
