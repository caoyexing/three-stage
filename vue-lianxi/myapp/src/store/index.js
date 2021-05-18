import Vue from 'vue'
import Vuex from 'vuex'
// vuex 持久化 页面刷新数据不会丢失  切换的保定的数据 刷新之后还是保定的数据
import createPersistedState from "vuex-persistedstate";
import TabModule from './module/TabModule'
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'


Vue.use(Vuex)
export default new Vuex.Store({
  // 默认是存储到localStorage
  // createPersistedState({ storage: window.sessionStorage }); 存储到 sessionStorage中
  plugins: [createPersistedState()],
  state: {
   
  },
  mutations: {
   
  },
  //异步的数据请求 触发commit
  actions: {
   
  },
  // 模块
  modules: {
    TabModule,
    CityModule,
    CinemaModule
  }
})
