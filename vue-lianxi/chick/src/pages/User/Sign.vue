<template>
  <div class="sign">
    <!-- 头部 -->
    <div class="header">
      <div class="icon" @click="back">
         <i class="iconfont iconfanhui1"></i>
      </div>
      <ul class="tabList">
        <li
          v-for="(item,index) in tabs" :key="index" 
          :class="index === selIndex ? 'sel' : ''"
          @click="changIndex(index)"
        >
        <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 随播放 -->
    <div class="play" >
      <i class="iconfont iconbofang"></i>
      <span data-v-22887e32="" class="text" @click="goSign">随机播放全部</span>
    </div>
    
    <!-- 图片 -->
    <div class="pic" ref="cont">
      <div class="base">
      </div>
    </div>
    <!-- like -->
    <div class="wrapper">
       <div class="like" v-if="selIndex===0" ref="like">
      我喜欢的
      </div>
      <!-- listen -->
      <div class="listen" v-if="selIndex===1" ref="listen">
        最近听的
      </div>
    </div>
   
  </div>
</template>

<script>
import Like from './Like.vue'
import Listen from './Listen'
import {mapState} from 'vuex'
export default {
  data(){
      return{
        tabs:[
          {name:'我喜欢的'},
           {name:'最近听的'}],
           selIndex:0
      }
  },
  computed:{
    ...mapState(['iLike','iListen'])
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    changIndex(index){
      this.selIndex = index
    },
    goSign(){
      console.log('1')
      this.$router.push('/modal')
    }
  },
  mounted(){ 
    if(this.iLike.length === 0){
      this.$refs.cont.style.display = 'block'
      this.$refs.like.style.display = 'none'
    }else{
      this.$refs.cont.style.display = 'none'
      this.$refs.like.style.display = 'block'
    }
    // if(this.listen.length === 0 ){
    //   this.$refs.cont.style.display = 'block'
    //   this.$refs.listen.style.display = 'none'
    // }else{
    //    this.$refs.cont.style.display = 'none'
    //   this.$refs.listen.style.display = 'block'
    // }
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.sign{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #222;
  color: hsla(0,0%,100%,.3);
  .header{
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
    .tabList{
      display: flex;
      margin: 6px 0 30px 0;
      justify-content: center;
      border-radius: 10px;
     li{
       height: 30px;
       width: 120px;
       line-height: 30px;
       text-align: center;
       font-size: 14px;
       border: 1px solid #444;
       border-radius: 6px;
     }
    }
    .tabList li:nth-child(2n){
      border-left: none;
    }
  }
 .sel{
    color: #fff;
    background-color: #333;
  }
  // 随机
  .play{
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid hsla(0,0%,100%,.5);
    color: hsla(0,0%,100%,.5);
    border-radius: 100px;
    font-size: 0;
    text-align: center;
    span{
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
    }
    .iconfont{
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
      font-size: 16px
    }
  }
  .pic{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    .base{
      width: 86px;
      height: 90px;
      margin: 0 auto;
      background-image: url(http://ustbhuangyi.com/music/img/no-result@2x.7f236bd8.png);
      background-size: 86px 90px;
    }
  }
  .wrapper{
    position: absolute;
    top: 110px;
    bottom: 0;
    width: 100%;
    // border: 1px solid red;
    font-size: 14px;
    padding: 0 20px;
  }
}
 
</style>

