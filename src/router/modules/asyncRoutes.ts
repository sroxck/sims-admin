import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
import {RouteMetaConfigRaw} from "@/types/route"
type RouteConfig = RouteRecordRaw & RouteMetaConfigRaw
export const asyncRoutes: Array<RouteConfig> = [
  {
    path: '/',
    children: [
      {
        path: '/home',
        meta: {
          title: '首页',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/home/index.vue')
      }
    ],
    meta: {
      title: '首页',
    },
    component: Layout
  },
]
