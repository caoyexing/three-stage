import http from "../utils/axios"
// nowPlaying 页面的list 数据
export const filmsList = (current,id)=>{
  return new Promise((resolve,reject)=>{
    http({
      url:`/gateway?cityId=${id}&pageNum=${current}&pageSize=10&type=1&k=2105315`,
      headers:{'X-Host':'mall.film-ticket.film.list',},
    })
    .then((data)=>{
      resolve(data)
    })
    .catch((err)=>{
      reject(err)
    })

  })
  
}