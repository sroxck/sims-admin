import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw ,} from 'vue-router'
// & 交叉类型 用于扩展类型
type RouterConfig = RouteRecordRaw & { hidden?: boolean }
import Layout from '@/layout/index.vue'
import { constantRouter } from './modules/constantRouter'
import { asyncRoutes } from './modules/asyncRoutes'
 
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter
})
for(const [i,v] of asyncRoutes.entries()){
  router.addRoute(v)
}
     