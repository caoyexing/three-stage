
import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'
export const UserLogin=(userName,passWord)=>{
  return new Promise((resolve,reject)=>{
    let url='http://10.60.14.145:3003/v1/admin/user/login'
    axios.post(url,{userName,passWord})
    .then((res)=>{
      if(res.err===0){
        resolve(res)
      }else{
        reject(res)
      }
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
// 退出登陆 异步变同步没有then retuen 出结果 通过uid 退出登陆
export const UserLogout=async ()=>{
  let url='http://10.60.14.145:3003/v1/admin/user/logout'
  let uid=getItem('uid') || ''
  let result = await axios.post(url,{uid})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}