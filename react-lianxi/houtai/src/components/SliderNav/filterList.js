import allList from './allList'

export const filter=(ids)=>{
  // 将满足权限的列表放进一个数组中
  let result =[]
  // 第一轮的循环的判断
   for (let index = 0; index < allList.length; index++) {
    let id = allList[index].id
    // 判断里面是有的 没有返回 -1 
     if(ids.indexOf(id)!== -1){
       result.push(allList[index])
     }else 
    // 第二轮的循环
     if(ids.indexOf(id) === -1 && allList[index].children){
      //  父及导航不满足条件 但是有子节点 判断子节点是否满足条件
      // 默认子节点都不满足
        let state= false
        // 盛放子节点的数组
        let tmp=[]
        for (let i = 0; i < allList[index].children.length; i++) {
          let childrenId= allList[index].children[i].id
          if( ids.indexOf(childrenId)!== -1){
            // 满足条件的直接push'进去
            tmp.push(allList[index].children[i])
            state=true
          }
        }
        // 要判断子节点满足 再将父节点体添加进去
        if(state){
          allList[index].children= tmp
          result.push(allList[index])
        }
     }
   }
  //  console.log(result)
   return result 
}