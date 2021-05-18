<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 插槽 可以直接将内容 写进去 -->
      <slot></slot>
    </div>
    <!-- 分页 -->
     <!-- <div class="swiper-pagination"></div> -->
     <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev" id="prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
// swiper  是按需引入的 不想按需引入 就直接在地址处直接添加/bundle
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  mounted(){
   var swiper = new Swiper('.swiper-container',{
       loop: true,
        // pagination: {
        // el: '.swiper-pagination',
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

   })
  }
}
</script>

<style lang='scss' scoped>
// 
.swiper-button-prev{
  color: white;
}

</style>