import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'

import VueLazyload from 'vue-lazyload'

// 自己封装的组件
import toast from 'components/toast/index.js'

Vue.config.productionTip = false

// 挂在全局的事件总线
Vue.prototype.$bus = new Vue()

// 挂在toast 插件的使用  use  自己封装
Vue.use(toast)

Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
