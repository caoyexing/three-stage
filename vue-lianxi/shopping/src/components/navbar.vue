<template>
<!-- 标题 -->
  <div class="nav">
   <div class="left"><slot name="left"></slot></div>
   <div class="center"><slot name="center"></slot></div>
   <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {


}
</script>

<style lang='scss' scoped>
.nav{
   position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    height: 49px;
    width: 100%;
    background-color: #f66;
    line-height: 49px;
    text-align: center;
    color: white;
    display: flex;
    .left{
      width: 60px;
    }
    .right{
      width: 60px;
    }
    .center{
      flex: 1;
    }
  }


</style>