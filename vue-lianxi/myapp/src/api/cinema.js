import http from '@/utils/axios.js'
 
export const cinemaInfo = ()=>{
  return new Promise((resolve,reject)=>{
    http({
      url:'/gateway?cityId=310100&ticketFlag=1&k=4999950',
      headers:{
        'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then((res)=>{
      resolve(res)
    })
  })
}