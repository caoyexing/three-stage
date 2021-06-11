import http from '@/utils/axios.js'


export const getTotal = ()=>{
  return new Promise((resolve,reject)=>{
    http('/home/multidata')
    .then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}


export const getgoodList = (type,page)=>{
  return new Promise((resolve,reject)=>{
    let url=`/home/data?type=${type}&page=1`
    http(url)
    .then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

