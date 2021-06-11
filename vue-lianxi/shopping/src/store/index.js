import Vue from 'vue'
import Vuex from 'vuex'
import DetailModule from './module/detailModule.js'
import cartModule from './module/cartModule.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    DetailModule,
    cartModule
  }
})
