
const module ={
  namespaced:true,
  state: {
    isTabShow:true
  },
  mutations: {
    TabShow(state){
      state.isTabShow = true
    },
    TabHide(state){
      state.isTabShow = false
    }

  },
  actions: {
    
  }
 
}

// 导出的模块  import module from ''

export default module