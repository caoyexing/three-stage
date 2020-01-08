import axios from '../utils/axios'

// 获取商品列表
export const GetGoods=async (page,pageSize)=>{
  let url='http://10.60.14.45:3003/v1/admin/food/getFoods'
  let result=await axios.post(url,{page,pageSize})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}