<template>
  <div class="detail-info" v-if="goods">
    <div class="title">
      <p>{{goods.title}}</p>
    </div>
    <div class="price">
      <span class="n-price">￥{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="other" v-if="goods">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[3].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1" :key=index>
        <img :src="goods.services[index-1].icon" alt="" >
        <span>{{goods.services[index-1].name}}</span>
      </span>
      <!-- {{goods}} -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return null
      }
    }
  },
 
}
</script>

<style lang='scss' scoped>
.detail-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title{
  color: #222;
  margin-bottom: 10px;
}
.n-price{
  font-size: 24px;
  color: #f66;
  margin-right: 10px;
}
.o-price{
  font-size: 12px;
  color: #ddd;
  text-decoration: line-through;
}
.discount{
  font-size: 12px;
  padding: 2px 5px ;
  background-color: #f13e3a;
  border-radius: 8px;
  margin-left: 5px;

  /* 让元素上浮 相对定位 */
  position: relative;
  top: -8px;
}

.other{
  margin-top: 15px;
  font-size: 15px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}

.services{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 14px;
  span img{
    height: 10px;
    width: 10px;
  }
}
</style>