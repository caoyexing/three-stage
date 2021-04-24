<template>
  <div class="detail-header">
    <div class="title">{{name}}</div>
    <span class="goBack" @click="goBack">
      <i class="iconfont iconfanhui-copy-copy"></i>
    </span>
  </div>
</template>

<script>
export default {
  props:['name'],
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.detail-header{
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  line-height: 50px;
  text-align: center;
  // // position: relative;
  .goBack{
    display: inline-block;
    position:fixed;
    top: 10px;
    left: 20px;
    height: 30px;
    width: 30px;
    // background-color: yellow;
    line-height: 30px;
    text-align: center;
    i{
       font-size: 20px;
    }
  }
}


</style>