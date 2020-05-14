import axios from '../utils/axios'
// 获取商品列表
export const GetFoods= async(page,pageSize)=>{
  let url='/hehe/v1/admin/food/getFoods'
  let result =await axios.post(url,{page,pageSize})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}

// 删除数据
export const DelFood= async (foodId)=>{
  let url ='/hehe/v1/admin/food/delFood'
  let result = await axios.post(url,{foodId})
  if(result.err===0){
    return result 
  }else{
    throw result
  }
}