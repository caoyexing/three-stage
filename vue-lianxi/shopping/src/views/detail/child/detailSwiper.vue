<template>
  <div class="swiper-container" ref="detailSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgSwiper" :key='index'>
        <img :src="item" alt="">
      </div>
    </div>
  </div>
   
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  props:{
    imgSwiper:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    init(){
      let swiper = new Swiper(this.$refs.detailSwiper,{
        loop:true,
        autoplay:true
      })
    }
  },
  watch:{
    imgSwiper(){
      this.$nextTick(()=>{
      this.init()
    })
    }
    
  }


}
</script>

<style lang='scss' scoped>
.swiper-container{
  height: 300px;
  width: 100%;
}




</style>