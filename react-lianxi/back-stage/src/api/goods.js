import axios from '../utils/axios'

// 获取商品列表10.60.14.145
export const GetGoods=async (page,pageSize)=>{
  let url='/hehe/v1/admin/food/getFoods'
  let result=await axios.post(url,{page,pageSize})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}
// 删除数据
export const DelData= async (foodId)=>{
  let url='/hehe/v1/admin/food/delFood'
  let result=await axios.post(url,{foodId})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}
// 添加数据
export const AddGood=async ({name,price,img,foodType,desc})=>{
  let url='/hehe/v1/admin/food/addFood'
  let result= await axios.post(url,{name,price,img,foodType,desc})
  if(result.err===0){
    return result 
  }else{
    // 将错误扔出去
   throw result
  }
}