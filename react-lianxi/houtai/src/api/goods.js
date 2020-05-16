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

// 添加数据
export const addFood = async ({name,price,desc,foodType,img})=>{
  let url='/hehe/v1/admin/food/addFood'
  let result =await axios.post(url,{name,price,desc,foodType,img,})
  if(result.err===0){
    return result 
  }else{
    throw result
  }
}

//修改数据
export const UpdateFood=async ({_id,name,price,img,foodType,desc})=>{
  let url='/hehe/v1/admin/food/updateFood'
  // 列表中的数据是_id 发送的请求的数据是foodId 
  let foodId= _id
  let result = await axios.post(url,{foodId,name,price,img,foodType,desc})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}