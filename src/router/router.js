// 导入router
import VueRouter from 'vue-router'
import Vue from 'vue'

import login from '@/view/login/login.vue'
// 注册
Vue.use(VueRouter)

// 创建
const router = new VueRouter({
    routes:[
      {
        path:'/',
        component:login
      }
    ]
  });
//   输出
export default router