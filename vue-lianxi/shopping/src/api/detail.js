import http from '@/utils/axios'

export const getDetail =(iid)=>{
  return new Promise(( resolve,reject)=>{
    http(`/detail/?iid=${iid}`)
    .then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
// 将需要的数据集中到一起 类 
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc  = itemInfo.desc
    this.newPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// shop
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// params
export class Params{
  constructor(info,rule){
    this.image = info.images?info.images[0]:''
    this.info = info.set
    this.sizes = rule.tables
  }
}

// 推荐数据

export const getRecommend = ()=>{
  return new Promise((resolve,reject)=>{
    http('/recommend')
    .then((res)=>{
      resolve(res)
    })
  })
}