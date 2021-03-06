import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置的样式引入一次即可
import './style/reset.css'
// 动画
// import './style/animate.css'

// mint ui
// 全局引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
