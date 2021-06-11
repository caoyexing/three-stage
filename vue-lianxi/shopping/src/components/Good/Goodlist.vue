<template>
  <div class="goodlist">
    <!-- 传值 :listItem='item'-->
    <good-item v-for="(item,index) in showgood" :key='index' :listItem='item'></good-item>
  </div>
</template>

<script>
import GoodItem from './GoodItem'
export default {
  props:['showgood'],
  components:{
    GoodItem
  }

}
</script>

<style lang='scss' scoped>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>