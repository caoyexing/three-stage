import http from '@/utils/axios.js'

export const cityList = ()=>{
  return new Promise((resolve,reject)=>{
    http({
      url:'/gateway?k=3867232',
      headers:{
       'X-Host':'mall.film-ticket.city.list'
      }
    })
    .then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}


