<template>
  <div id="films">
    <!-- 轮播 -->
    <banner class="top"> 
       <div class="swiper-slide" v-for="(item,index) in imgList" :key='index'>
         <div :style="{ backgroundImage:'url(' +item +')'}" style="height:200px;background-size:cover;background-position:center;">
         </div>
         <!-- <img :src="item" alt=""> -->
       </div>
        
    </banner>
    <!--tabs bar -->
    <film-bar style="position:sticky;top:0px;background-color:#fff;z-index:100"></film-bar>
    <!-- nav -->
    <router-view></router-view>
  </div>
</template>

<script>
import filmBar from '../views/films/filmBar'
import banner from '../components/banner'
export default {
  components:{
    filmBar,
    banner
  },
  data(){
    return{
      tab:[
        {name:'正在热映',path:'/films/nowPlaying'},
        {name:'即将上映',path:'/films/comingSoon'}
      ],
      imgList:['https://static.maizuo.com/pc/v5/usr/movie/d418c7cc3a0a7208322c5e7190adde93.jpg?x-oss-process=image/quality,Q_70',
      'https://static.maizuo.com/pc/v5/usr/movie/1856a6776dcc5c584d0fa5addfe8b31a.jpg?x-oss-process=image/quality,Q_70',
      'https://static.maizuo.com/pc/v5/usr/movie/3be1740bd63b5d0c6edb2ec6a5723e07.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  

}
</script>

<style lang='scss' scoped>
.top{
  height: 210px;
  background-color:rgb(249, 249, 249) ; 
  padding: 6px 0;
  img{
    height: 200px;
    width: 100%;
  }
}
ul{
  height: 49px;
  display: flex;
  text-align: center;
  line-height: 49px;
  color: #191a1b;
  border-bottom: 1px solid #ddd ;
  position: relative;
    li{
    width: 50%;
    font-size: 14px;
    }
    .bar{
      position: absolute;
      top: 46px;
      left: 0;
      width: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
}
.sel .name{
  color: #ff5f16;
}

 
 
  
</style>