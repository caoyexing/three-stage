<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key='index'>
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
   
  }

}
</script>

<style lang='scss' scoped>
.recommend{
  display: flex;
  padding: 20px 0 30px 0 ;
  text-align: center;
  border-bottom: 10px solid #eee;
  font-size: 12px;
  .recommend-item{
    flex: 1;
    img{
      height: 70px;
      width: 70px;
      margin-bottom: 8px;
    }
  }
}

</style>