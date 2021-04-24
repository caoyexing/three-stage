import http from '../utils/axios'
export const getInfo = (mid)=>{
  return new Promise((resolve,reject)=>{
    let url = `https://m.maizuo.com/gateway?filmId=${mid}&k=9204677`
    http({
    url,
    headers:{
      'X-Client-Info':' {"a":"3000","ch":"1002","v":"5.0.4","e":"16165628241337208002838529","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.info'
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