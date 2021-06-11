<template>
  <div class="good-item" @click="jumpdetail(listItem.iid)">
    <img :src="showImg" alt="" @load="loadimg">
    <div class="info">
      <p class="des">{{listItem.title}}</p>
      <span>{{listItem.price}}</span>
      <i class="iconfont iconshoucang"></i>
      <span>{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['listItem'],
  methods:{
    loadimg(){
      this.$bus.$emit('loadimg')
    },
    jumpdetail(id){
      this.$router.push(`/detail/${id}`)
    }
  },
  computed:{
    //取出来的数据中间是有嵌套的 根据数据结构取出数据
    showImg(){
      return this.listItem.image || this.listItem.show.img
    }
  }
}
</script>

<style lang='scss' scoped>
.good-item{
  flex: 1;
  width: 46%;
  padding:  4px;
  text-align: center;
  img{
    width: 100%;
    height: 256px;
  }
  .info{
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
    span{
      font-size: 12px;
      margin: 0 4px;
    }
  }
}

</style>