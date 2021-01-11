import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songlist:[],//播放的歌曲列表 判断的是length 
    fullScreen:true,//是否充满全屏
    currentSong:-1,//当前播放的是哪首歌

  },
  mutations: {
    addSongList(state,list){
      state.songlist = list
    },
    changeScreen(state,param){
      state.fullScreen = param
    },
    changeSong(state,index){
      state.currentSong = index
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    changeState(state){
      return state.songlist[state.currentSong]
    }
  }
})
