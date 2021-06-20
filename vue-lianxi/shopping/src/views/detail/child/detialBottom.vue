<template>
  <div class="bottomnav">
    <div class="left">
      <div class="shop">
        <i class="iconfont iconshangjia"></i>
        <p>商家</p>
      </div>
      <div class="bus">
        <i class="iconfont iconkefu"></i>
        <p>客服</p>
      </div>
      <div class="colle">
        <i class="iconfont iconshoucang1"></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="center">
      <p @click="addCart">加入购物车</p>
    </div>
    <div class="right" >
      <p @click="goShop">购买</p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addCart(){
      this.$emit('addCart')
    },
    goShop(){
      this.$emit('goShop')
    }
  },
  

}
</script>

<style lang='scss' scoped>
.bottomnav{
  height: 49px;
  width: 100%;
  border-top: 1px solid #ddd;

  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  
  display: flex;

  
}

.left{
  width: 180px;

  display: flex;
  justify-content: space-around;
  align-items: center;

}
.left p{
  color: #f66;
  margin-top: 6px;
}
.left i{
  color: #ddd;
}
.left div{
  text-align: center;
}
.center,.right{
  color: #fff;
  line-height: 49px;
  text-align: center;
}

.center{
  width: 90px;
  background-color: orange;
  
}

.right{
  flex: 1;

  background-color: orangered;
}

</style>