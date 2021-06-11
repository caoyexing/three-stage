<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
        <!-- <div
          :style="{backgroundImage:'url('+item.image+')'}"
          style="height:200px;background-size:cover;background-position:center;"
         @load="imgload"
        ></div> -->
        <img :src="item.image" alt="" @load="imgload">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

export default {
  props: ["banners"],
  data(){
    return {
      isload : false
    }
  },
  methods:{
    imgload(){
      // 一个图片显示成功即可获得高度
      if(!this.isload){
        this.$emit('swiperload')
        this.isload = true
      }
    }
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        var swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 3000,
          },
        });
      });
    },
  },
};
</script>

<style lang='scss' scoped>
img{
  height: 200px;
  width: 100%;

}

</style>