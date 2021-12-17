<template>
  <el-aside class="w-64 bg-gray-50">
    <el-menu router class="bg-gray-50" :default-active="path">
    <div class="logo h-20">33</div>
      <sideItem v-for="(route,index) in routerList" :key="index" :item="route"></sideItem>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import sideItem from './item.vue'
import {  useRoute } from 'vue-router'
import { constantRouter } from '@/router/modules/constantRouter'
import { asyncRoutes } from '@/router/modules/asyncRoutes'
const routerList = asyncRoutes.concat(constantRouter)
const {path} = useRoute()
</script>
<style >
.el-menu {
  height: 100%;
}
.logo {

}
.el-sub-menu.is-active .el-sub-menu__title{
    color:  var(--el-menu-active-color);
}
</style>