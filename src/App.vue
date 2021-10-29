<!--
 * @Author: your name
 * @Date: 2021-10-25 17:52:57
 * @LastEditTime: 2021-10-26 15:03:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from "@vue/runtime-core";
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
const router = useRouter()

const backToDash = ()=>{
  router.push('/ss')
}
</script>

<template>
<div id="app">
  <router-view/>
3333
  <button @click="backToDash">dashboard</button>
  <el-button>23</el-button>
</div>
</template>

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
