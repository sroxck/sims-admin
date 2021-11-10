import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
interface RouterCustomConfig {
  hidden?: boolean,
  noCatch?: boolean,
  alwaysShow?:boolean
}
type RouteConfig = RouteRecordRaw & RouterCustomConfig
export const asyncRoutes: Array<RouteConfig> = [
  {
    path: '/',
    children: [
      {
        path: '/ss',
        meta: {
          title: '首页222',
          icon: 'home',
          roles: ['admin'],
          activeMenu: '/ss'
        },
        children: [{
          path: '/sss',
          component: () => import('@/views/home/index.vue')

        }],
        component: () => import('@/views/home/index.vue')
      }
    ],
    alwaysShow:true,
    meta: {
      title: '首页343434222',
    },
    component: Layout
    
  },
  {
    path: '/s',
    children: [
      {
        path: '/ss4s',
        meta: {
          title: '首页',
          icon: 'home',
          roles: ['admin'],
          activeMenu: '/ss'
        },
        children: [{
          path: '/ss44s',
          component: () => import('@/views/home/index.vue')

        }],
        component: () => import('@/views/home/index.vue')
      }
    ],
    meta:{
      title:'333344444'
    },
    component: Layout
  },
  {
    path: '/s44',
    meta:{
      title: '44466',
    },
    children: [
      {
        path: '/4ss4s',
        meta: {
          title: '测试555',
          icon: 'home',
          roles: ['admin'],
          activeMenu: '/ss'
        },
        children: [{
          path: '/ss44s',
          component: () => import('@/views/home/index.vue')

        },
        {
          path: '/ss4444s',
          component: () => import('@/views/home/index.vue')

        },
      ],
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/4555ss4s',
        meta: {
          title: '测试',
          icon: 'home',
          roles: ['admin'],
          activeMenu: '/ss'
        },
        children: [{
          path: '/ss44s',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '测555试',
            icon: 'home',
            roles: ['admin'],
            activeMenu: '/ss'
          },
        },
        {
          path: '/ss4444s',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '测555试777',
            icon: 'home',
            roles: ['admin'],
            activeMenu: '/ss'
          },

        },
      ],
        component: () => import('@/views/home/index.vue')
      }
    ],
    component: Layout
  },
]
