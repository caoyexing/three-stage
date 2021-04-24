import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './style/reset.css'

// 组件库 vant 全部一次性引入  
// 还可以按需引入
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
