import {SET_TOKEN_MODAL} from './action-types'
// 存放函数 处理数据时调用
export default{
  setTokenMoal(param=true){
    return {type:SET_TOKEN_MODAL,params:param}
  }
}