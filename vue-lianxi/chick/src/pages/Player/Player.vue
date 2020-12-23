<template>
  <div class="player" v-if="songlist.length">
    <div class="top" v-if="fullScreen">
      <i class="iconfont iconxiangxia" @click="changeScreen(flase)"></i>
      <h2 class="title">{{ changeState.songname }}</h2>
      <h3
        class="subtitle"
        v-for="(item, index) in changeState.singer"
        :key="index"
      >
        {{ item.name }}
      </h3>
      {{changeState}}
      <div class="middle" :class="cdStyle">
        <img :src="changeState.albmpic"  alt="" />
      </div>
    </div>
    <div class="bottom" v-else @click="changeScreen(true)"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import {getSongPurl} from 'api/singer.js'
export default {
  data(){
    return{
      // 用一个值控制转圈的状态
      isPlay:false
    }
  },
  computed: {
    ...mapState(["songlist", "fullScreen"]),
    ...mapGetters(["changeState"]),
    cdStyle(){
      // 控制转圈 
      return this.isPlay?'cdplay':'paused'
    }
  },
  methods: {
    ...mapMutations(["changeScreen"]),
  },
  created(){
    getSongPurl()
  }
};
</script>

<style lang='less' scoped>
@import "~style/index.less";
.player {
  font-size: 14px;
  text-align: center;
  color: yellowgreen;
  // 大图
  .top {
    .fixed(0,0,0,0);
    background-color: @black;
    // 头部
    i {
      display: block;
      position: fixed;
      top: 6px;
      left: 20px;
      font-size: 30px;
      color: @yellow;
    }
    .title {
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 18px;
    }
    .subtitle {
      height: 20px;
      font-size: 14px;
      color: #fff;
    }
    // cd
    .middle{
      height: 300px;
      .w(375);
      margin-top: 40px;
      background-color: yellowgreen;
      img{
        height: 300px;
        width: 300px;
        border-radius: 50%;
      }
      // 两个类名 中间没有空格
      &.cdplay{
        animation: rotate 10s linear infinite;
      }
      &.paused{
      animation-play-state: paused;
      }

    }
  }
  // 小图
  .bottom {
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 375px;
    background-color: @yellow;
  }
}
@keyframes rotate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>