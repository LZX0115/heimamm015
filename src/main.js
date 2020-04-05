import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import router from './router/router.js'
// 注册
Vue.use(ElementUI);
Vue.config.productionTip = false
// 注入实例化
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
