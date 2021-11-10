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
  {
    path: '/',
    children: [
      {
        path: '/doc',
        meta: {
          title: '文档',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/doc/index.vue')
      }
    ],
    meta: {
      title: '文档',
    },
    component: Layout
  },
  {
    path: '/svg',
    children: [
      {
        path: '/svg',
        meta: {
          title: 'svg',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/svg/index.vue')
      }
    ],
    meta: {
      title: 'svg',
    },
    component: Layout
  },
  {
    path: '/fsf', // 有个坑要填,如果子级大于2个,那个父级的path要设置一个唯一值
    children: [
      {
        path: '/bar',
        meta: {
          title: '柱状图',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/visual/bar/index.vue')
      },
      {
        path: '/line',
        meta: {
          title: '折线图',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/visual/line/index.vue')
      },
      {
        path: '/pie',
        meta: {
          title: '饼图',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/visual/pie/index.vue')
      }
    ],
    meta: {
      title: '可视化',
    },
    component: Layout
  },
  {
    path: '/44', // 有个坑要填,如果子级大于2个,那个父级的path要设置一个唯一值
    children: [
      {
        path: '/dragTable',
        meta: {
          title: '可拖拽表格',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/table/dragTable/index.vue')
      },
      {
        path: '/editTable',
        meta: {
          title: '可编辑表格',
          icon: 'home',
          roles: ['admin'],
        },
        component: () => import('@/views/table/editTable/index.vue')
      },
    ],
    meta: {
      title: '表格',
    },
    component: Layout
  },
]
