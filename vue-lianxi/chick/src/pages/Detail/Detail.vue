<template>
  <div class="detail">
    <div class="icon" @click="back" ref="back" >
      <i class="iconfont iconfanhui1" ref="icon"></i>
    </div>
    <h1 ref="title">{{ name }}</h1>
    <div class="img" :style='{"background-image":`url(${img})`}' ref='img' >
      <!-- <img :src="img" alt="" /> -->
      <div class="filter">

      </div>  
    </div>
    <!-- 歌曲列表 -->
    <div class="wrapper" ref='wrapper'>
      <ul class="content">
        <li v-for="(item, index) in list" :key="index"
          @click='goPlay(index)'
        >
          <h2> {{ item.songname }}</h2>
          <p v-for="(sItem,sIndex) in item.singer" :key = 'sIndex'>
            {{sItem.name}}·{{item.albumname}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDetail,getAlbummid} from "api/singer.js";
import { getAvator } from "pages/Singer/singer.js";
import { mapGetters, mapMutations,mapState } from 'vuex';
import Bs from 'better-scroll'
export default {
  data() {
    return {
      // 歌曲列表
      list: [],
      name: "",
      // 图片
      img: "",
    };
  },
  computed:{
    ...mapState(['songlist',]),
    // ...mapGetters(('changState'))
  },
  methods: {
    ...mapMutations(['addSongList','changeSong','changeScreen']), 
    initBs(){
      let wrapper = this.$refs.wrapper
      let img = this.$refs.img
      let imgHeight = img.clientHeight
      let icon = this.$refs.icon
      let title = this.$refs.title
      let back = this.$refs.back
      
      this.bs= new Bs(wrapper,{probeType:3,click:true})
      this.bs.on('scroll',({y})=>{
        // 判断是哪个方向的滑动
        // 向下拉动 背景图的百分比
        if(y > 0){
          let precent = 1+ y / imgHeight
          img.style.zIndex = 1
          icon.style.zIndex = 1
          title.style.zIndex =1
          back.style.zIndex =1
          img.style.transform = `scale(${precent})`
        }else{
          img.style.zIndex = 0
          if(Math.abs(y) > imgHeight -40){
              img.style.zIndex =9
              icon.style.zIndex = 9
              title.style.zIndex =9
              back.style.zIndex =9
              img.style.paddingTop = '0'
              img.style.height = '40px'
          }
          else{
            img.style.height = '0'
            img.style.paddingTop= '70%'
          }
        }
       
      })
    },
    // 将歌单填进store中
    goPlay(index){
      this.addSongList(this.list) 
      this.changeSong(index)
      this.changeScreen(true)
    },
    back() {
      this.$router.go(-1);
    },
    getSongList(list) {
    //  console.log(list)
     let arr = list.map((item,index)=>{
       let {albumdesc,albummid,albumname,singer,songname,songmid} =item.musicData
       let albmpic = getAlbummid(albummid)
      //  console.log( {albumdesc,albummid,albumname,singer,songname,songmid,albmpic})
       return {albumdesc,albummid,albumname,singer,songname,songmid,albmpic}
     })
     return arr
    },
  },
  created() {
    // 传入的参数接受 请求数据
    let { mid } = this.$route.params;
    // console.log(mid)
    getDetail(mid).then((res) => {
      this.name = res.data.singer_name;
      // 图片
      this.img = getAvator(res.data.singer_mid);
      // 歌曲列表
      this.list = this.getSongList(res.data.list);
      // console.log(res.data)
      // 初始化initBS  this.$nextTick 在哪里都可以使用 不一定是watch里面
    this.$nextTick(()=>{
      this.initBs()
    })
    });
  },
};
</script>

<style lang='less' scoped>
@import "~style/index.less";
// 腰间嵌套的路由定位 要不然显示不出来
.detail {
  .fixed(0,0,0,0);
  background-color:@black;
  .icon .iconfont{
    display: block;
    position: absolute;
    top: 0;
    left: 6px;
    height: 20px;
    width: 22px;
    padding: 10px;
    font-size: 24px;
    color: @yellow;
    font-weight:900;
  }
  h1 {
    position: absolute;
    left: 10%;
    top: 0;
    height: 40px;
    width: 300px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .img{
    // position: relative;
    width: 100%;
    padding-top: 300px;
    height: 0;
    background-size: cover;
    .filter{
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7,17,27,.3);
    }
  }
  .wrapper{
    position:fixed;
    top: 300px;
    bottom: 0;
    width: 100%;
    .content{
      padding: 20px 30px;
      background-color: #222;
      width: 100%;
      li{
        height: 64px;
        h2{
        font-size: 14px;
        color: white;
        }
        p{
          color: @white_o5;
          font-size: 14px;
        }
      }
    }
  }
}
</style>