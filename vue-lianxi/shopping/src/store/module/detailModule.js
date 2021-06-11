
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
export default module