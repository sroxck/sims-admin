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
<!-- 3333
  <button @click="backToDash">dashboard</button> -->
  <!-- <el-button>23</el-button> -->
</div>
</template>

<style>
#app {
 
}
</style>
