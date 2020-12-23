<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" 
          v-for='(item,index) in banners'
          :key = 'index'
        >
        <img :src="item" alt="" class="banner-item">
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  // 数据是网络请求回来的 是父组件传递过来的 进行接受
  props:[
    'banners'
  ],
  methods: {
    initBanner() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true,
        // 直接写的时间
        autoplay:2000
      });
    },
  },
  //挂载阶段 是有dom对象的 created里面是没有dom对象
  mounted() {
    // banner的数据是请求回来的 请求回来的数据没有时间的规定 这个时候的dom对象的宽是0 不能滚动 要监听数据是否变化
      this.initBanner();
  },
  // 监听数据的请求 监听更新后的dom对象
  // watch:{
  //   banners(){
  //     this.$nextTick(()=>{
  //       this.initBanner()
  //     })
  //   }
  // }
 
};
</script>

<style lang='less' scroped>
.swiper-slide{
  height: 150px;
}
.banner-item{
  height: 150px;
  width: 100%;
}
</style>