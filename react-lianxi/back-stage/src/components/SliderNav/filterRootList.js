import allList from './rootAllList'
// 传进来的ids
export const filterRootList=(ids)=>{
  // 根据id的权限 渲染数据 抛出的数组 定义一个空的数组
  let  result=[]
  // index是每个下标 0，1，2，
  // 将整个列表循环 将满足条件的加入进去
  for (let index = 0; index < allList.length; index++) {
    let id=allList[index].id
    // console.log(id)
    if(ids.indexOf(id)!==-1){
      // console.log(id)
      // id满足条件 直接push进去新数组 
      // console.log(allList)
      result.push(allList[index])
      // console.log(result)
    }else if(ids.indexOf(id)===-1&&allList[index].children){
      // 2-1 没有2  有2-1 父节点不满足 子节点满足
      // 父级导航不满足条件但是有子节点
      // 默认所有的子节点都不满足 判断
      let state=false
      // 将满足的子节点 加入进去
      let tmp=[]
      // 循环子节点的每一项
      for (let i = 0; i < allList[index].children.length; i++) {
        let childrenId=allList[index].children[i].id
        if(ids.indexOf(childrenId)!==-1){
          tmp.push(allList[index].children[i])
          // 子节点满足条件 改变了state的true
          state=true
        }
      }
      // state=true 将满足条件的父节点一起添加
      if(state){
        allList[index].children=tmp
        result.push(allList[index])
      }
    }
  }
  // console.log(result)
  return result
}