<template>
  <div class="comingSoon" >
    <div class="container">
       <vue-waterfall-easy :imgsArr="imgsArr" 
        :loadingDotCount= 0
        @scrollReachBottom="getData"
       >
       </vue-waterfall-easy>
    </div>
  
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import http from '../../utils/axios'
export default {
  data(){
    return{
        imgsArr: [
          {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36851.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36850.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36849.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36842.jpg',
          },
          {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36851.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36850.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36849.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36842.jpg',
          },
          {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36851.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36850.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36849.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36842.jpg',
          },
          {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36851.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36850.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36849.jpg',
          },
           {
            src:'https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/36/36842.jpg',
          },
          
        ],
        
    }
  },
  components:{
    vueWaterfallEasy
  },
   methods: {
    getData(){
      console.log('到底拉')
    }
  },
  
}
</script>

<style lang='scss' scoped>
.container{
  height: 2000px;
  width: 100%;
  display: flex;
  img{
    height: 80px;
    width: 45%;

  }
}
</style>