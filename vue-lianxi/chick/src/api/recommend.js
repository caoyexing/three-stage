import axios from '../utils/axios'
// 获取列表信息
export const getList = ()=>{
  return new Promise((resolve,reject)=>{
    let url = 'http://daxun.kuboy.top/api/pro'
    axios.get(url)
    .then((data)=>{
      resolve(data)
    })
    .catch((err)=>{
      reject(err)
    })

  })
}
// export const  getList= async ()=>{
//   // return new Promise((resolve,reject)=>{
//   //   let url= 'http://daxun.kuboy.top/api/pro'
//   //   axios.get(url)
//   //   .then((res)=>{
//   //     resolve(res)
//   //   })
//   //   .catch((err)=>{
//   //     reject(err)
//   //   })
//   // })
//   // 异步变同步 直接将res return出去结果
//   let url= 'http://daxun.kuboy.top/api/pro'
//   let res= await axios.get(url)
//   // 如果判断 可判断一下if(){}
//   return res
// }