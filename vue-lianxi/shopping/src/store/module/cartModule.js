
 const cartModule = {
  namespaced:true,
  state: {
    cartList:[],

  },
  // 内部放的是 单一的逻辑 
  mutations: {
    addCart(state,data){
      state.cartList.push(data)
    },
    addCount(state,data){
      data.count ++
    }
  },
  actions: {
    addCartM(context,data){
      // 返回一个 promise 对象 可以用 then 接受 
      return new Promise((resolve,reject)=>{
         // 判断内部是否有item 碰到第一个满足条件的值 结束
      let oldpro = context.state.cartList.find((item)=>{
        // console.log(item.iid,data.iid)
        return item.iid === data.iid  //true
      })
      // 里面已经有了item
      if(oldpro){
        // oldpro.count += 1
        resolve('数量加1')
         context.commit('addCount',oldpro)

      }else{
        // 自己加的属性在对象里  count checked
        resolve('加入购物车')
        data.count = 1
        data.checked = true
        context.commit('addCart',data)
      }
      })
       
      
    }
    
  }
  
}

export default cartModule