const module = {
  namespaced:true,
  state:{
    name:'上海',
    cityId:'310100',
  },
  mutations:{
    changeName(state,name){
      state.name = name
    },
    changeId(state,id){
      state.cityId = id
    },
  },
  actions:{

  }
}

export default module 