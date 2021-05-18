const module ={
  namespaced:true,
  state:{
    isTab:true,
  },
  mutations:{
    hide(state){
      state.isTab = false
    },
    show(state){
      state.isTab =true
    },
  },
  actions:{

  }
}

export default module