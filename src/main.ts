/*
 * @Author: Jingdongdong
 * @Date: 2021-10-25 17:52:57
 * @LastEditTime: 2022-03-02 18:14:07
 * @LastEditors: Jingdongdong
 * @Description: 
 */
// 引入vue主程序,createApp创建vue实例,使用mount挂载在节点上
import { createApp } from 'vue' // 引入vue主程序
import App from './App.vue' // 引入主页面
const app = createApp(App) // 通过主页面创建vue实例
// element-plus 组件库
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
// vue-router4 路由
import { router } from '@/router/index'
import "@/styles/index.css"
import store from './store'
app.use(router) // 使用router插件
app.use(store) // 使用router插件
app.use(Element) // 使用element组件库
app.mount('#app') // 挂载到节点上 
