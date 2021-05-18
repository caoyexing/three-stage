import {cinemaInfo} from '@/api/cinema.js'

const module = {
  namespaced:true,
  state:{
    cinemas:[]
  },
  mutations:{
    getCinema(state,data){
      state.cinemas = data
    },
    deleList(state,data){
      state.cinemas = []
    }
  },
  actions:{
    setCinema(store,cityId){
      //axios 依赖于promise实现 return then
    return cinemaInfo(cityId).then((res)=>{
      // console.log(res)
      store.commit('getCinema',res.data.cinemas)
    })
      
    }
  }
}
export default module