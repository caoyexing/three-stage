import state from './state'
import * as types from './action-types'

//赋值 将state的值赋值上去
export default (prevState=state,actions)=>{
  // 转化一下不会改变原来的值
  let newData = JSON.parse(JSON.stringify(prevState))
  let {type,params} = actions
  switch (type) {
    case  types.SET_TOKEN_MODAL:
      newData.tokenModal= params
      break;
  
    default:
      break;
  }
  return newData
}