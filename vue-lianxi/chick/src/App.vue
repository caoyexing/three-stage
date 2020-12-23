<template>
  <div id="app">
    <!-- 头部 -->
    <my-header></my-header>
    <!-- tab -->
    <my-tab></my-tab>
    <!--路由的显示 -->
    <!-- 只发起一次网络请求 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <!-- 播放器页面 -->
    <!-- 全局公用的组件  -->
   <Player></Player>

  </div>
</template>
<script>
import myHeader from './components/my_header'
import myTab from './components/my-tab'
import Player from 'pages/Player/Player.vue'
export default {
  components:{
    myHeader,
    myTab,
    Player
  }
  
}
</script>

<style lang="less">
@import '~style/index.less';
#app{
  background-color: @black;
}

</style>
