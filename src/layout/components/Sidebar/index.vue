<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
      <sideItem v-for="(route,index) in routerList" :key="index" :item="route" ></sideItem>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import { Message, Menu, Setting } from '@element-plus/icons'
import sideItem from './item.vue'
import { useRouter, useRoute } from 'vue-router'
import {constantRouter} from '@/router/modules/constantRouter'
import {asyncRoutes} from '@/router/modules/asyncRoutes'
const routerList =constantRouter.concat(asyncRoutes)
console.log(routerList);




</script>
<style >
.el-aside {
  color: var(--el-text-color-primary);
}
</style>