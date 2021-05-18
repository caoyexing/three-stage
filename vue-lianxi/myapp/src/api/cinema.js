import http from '@/utils/axios.js'
export const cinemaInfo = (mid)=>{
  return new Promise((resolve,reject)=>{
    
    http({
      url:`/gateway?cityId=${mid}&ticketFlag=1&k=4999950`,
      headers:{
        'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
      // console.log(err)
    })
  })
}