
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// & 交叉类型 用于扩展类型
type RouterConfig = RouteRecordRaw & { hidden?: boolean }
const constantRouter: Array<RouterConfig> = [
  {
    path: '/login',
    hidden: false,
    meta: {
      title: '登录页',
      icon: 'login',
      roles: ['admin']
    },
    component: () => import('@/views/index.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter
})
