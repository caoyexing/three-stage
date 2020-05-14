export const setItem=(key,value)=>{
  // 默认存储的形势是字符串 后端返回的数据一般是对象
  // json.stringfy 将对象转为字符串 
  localStorage.setItem(key,JSON.stringify(value))
}
export const getItem = (key)=>{
  // 要有返回值  将字符串转成对象 
 return JSON.parse(localStorage.getItem(key)) 
}
export const clear = ()=>{
  localStorage.clear()
}
export const removeItem =(key)=>{
  localStorage.removeItem(key)
}