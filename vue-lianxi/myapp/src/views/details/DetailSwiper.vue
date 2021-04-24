<template>
<!-- 组件封装 初始化不同的组件 类名 -->
  <div :class="swiperclass" class="swiper-container" >
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// swiper  是按需引入的 不想按需引入 就直接在地址处直接添加/bundle
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  props:{
    // 定义的类型
    slide:{
      type:Number,
      default:3
      },
      swiperclass:{
        type:String,
        default:'swiper-container'
      }
  },
  mounted(){
    // console.log(this.swiperclass )
    // 拼接 初始化的类名
   new Swiper( '.'+this.swiperclass ,{
    //  自由模式 
      slidesPerView: this.slide,
      spaceBetween: 10,
      freeMode: true,
   })
  }
}
</script>

<style lang='scss' scoped>
.swiper-wrapper{
  div{
    text-align: center;
    font-size: 12px;
  }
}

</style>