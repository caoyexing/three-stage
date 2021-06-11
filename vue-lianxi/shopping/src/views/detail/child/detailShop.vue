<template>
  <div class="shop" v-if="shop">
    <div class="top">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="left">
        <div class="allcount">
          <div>{{shop.sells | shopFilter}}</div>
          <div>总销量</div>
          </div>
        <div class="allbaby">
          <div>{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
          </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item,index) in shop.score" :key='index'>
            <td>{{item.name}}</td>
            <td :class="item.isBetter?'score-better':'score'">{{item.score}}</td>
            <td :class="item.isBetter?'better':'low'">{{item.isBetter ?'高' :'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <div class="enter">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters:{
    shopFilter(value){
      if(value <10000) return value
      return (value/10000).toFixed(1) + '万'
    }
  }
};
</script>

<style lang='scss' scoped>
.shop {
  padding: 25px 8px;
  border-bottom: 5px solid #f3f5f8;
}
.top {
  line-height: 45px;
  display: flex;
  align-items: center;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid rgb(0, 0, 0, 0.1);
    margin-right: 10px;
  }
  span {
    font-size: 20 px;
  }
}
// 中部
.shop-middle {
  display: flex;
  justify-content: space-between;
}
// 左侧
.left {
  display: flex;
  div{
    margin: 6px;
    font-size: 13px;
  }
}

// 右侧
.right{
  font-size: 14px;
}
table td{
  padding: 5px 0 ;
  
}
.score{
  color: yellowgreen;
}
.score-better{
  color: red;
}
.better{
  color: #fff;
  background-color: yellowgreen;
}
.low{
  color: #fff;
  background-color: red;
}
// 底部
.bottom{
  text-align: center;
  margin-top: 10px;
}
.enter{
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
}
</style>