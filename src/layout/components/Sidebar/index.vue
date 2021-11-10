<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
      <sideItem v-for="(route,index) in routerList" :key="index" :item="route" ></sideItem>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import sideItem from './item.vue'
import {constantRouter} from '@/router/modules/constantRouter'
import {asyncRoutes} from '@/router/modules/asyncRoutes'
const routerList = asyncRoutes.concat(constantRouter)

</script>
<style >
.el-aside {
  color: var(--el-text-color-primary);
}
.el-menu{
  height: 100%;
}
</style>