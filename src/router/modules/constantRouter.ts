import { RouteRecordRaw } from "vue-router";
interface RouterCustomConfig {
  hidden?: boolean,
  noCatch?: boolean,
}
type RouteConfig = RouteRecordRaw & RouterCustomConfig
export const constantRouter: Array<RouteConfig> = [
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
  {
    path:'/404',
    hidden:true,
    component:()=>import('@/views/error/index.vue')
  },
]
