
<script lang="ts" setup>
import { reactive } from 'vue';
import { RouteRecordRaw } from "vue-router";
type propConfig = {
  item: RouteRecordRaw & { meta?: any }
}
const props = defineProps<propConfig>()
const state = reactive<any>({ oneRoute: {} })
const hasOneChild = () => {
  const { item: route } = props
  if (route.children) {
    if (route.children.length === 1 && !route.meta.alwaysShow) {
      state.oneRoute = route.children[0]
      delete route.children
      return true
    }
  }
  if (!route.children) {
    state.oneRoute = route
    return true
  }
}
</script>
<template>
  <template v-if="!props.item.meta.hidden">
    <template v-if="hasOneChild()">
      <el-menu-item
        class="text"
        :index="state.oneRoute.path"
        v-if="state.oneRoute.meta"
      >{{ state.oneRoute.meta.title }}</el-menu-item>
    </template>
    <el-sub-menu :index="props.item.path" v-else>
      <template #title v-if="props.item.meta">{{ props.item.meta.title }}</template>
      <item v-for="(child,index) in props.item.children" :key="index" :item="child"></item>
    </el-sub-menu>
  </template>
</template>
<style >
.el-sub-menu__title {
  height: 50px !important;
  line-height: 50px !important;
  @apply text-base text-blue-900 text-opacity-70;
}
.text {
  height: 50px !important;
  line-height: 50px !important;
  @apply text-base text-blue-900 text-opacity-70 bg-gray-50;
}
.el-sub-menu .el-menu-item {
  @apply text-sm;
}
</style>