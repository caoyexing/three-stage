 const cartModule = {
  namespaced:true,
  state: {
    cartList:[]

  },
  mutations: {
    addCart(state,data){
      state.cartList.push(data)
    }
  },
  actions: {
    
  }
  
}

export default cartModule