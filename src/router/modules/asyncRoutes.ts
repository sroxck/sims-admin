import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
interface RouterCustomConfig {
  hidden?: boolean,
  noCatch?: boolean,
}
type RouteConfig = RouteRecordRaw & RouterCustomConfig
export const asyncRoutes: Array<RouteConfig> = [
  {
    path: '/',
    children: [
      {
        path: '/ss',
        meta: {
          title: '首页',
          icon: 'home',
          roles: ['admin']
        },
        component: () => import('@/views/home/index.vue')
      }
    ],
    component: Layout
  },
]
