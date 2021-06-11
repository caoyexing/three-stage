<template>
  <div class="home" >
    <!-- title -->
    <nav-bar class="navtab" >
      <div class="title" slot='center'>购物街{{$store.state.isShowTab}}</div>
    </nav-bar>
    <tabControl 
        :title="['流行','新款','精选']" 
        style="position:sticky;top:49px"
        @tabClick="tabClick"
        ref="tabControl1"
        :class="tabshow? 'fixed': ''"
        v-show='tabshow'
       ></tabControl>
    <!-- bs -->
    <better-scroll
      :banners="banners" 
      :goodlists='goodlists' 
      ref='scrollt' 
      :probe-type = '3'
      @backscroll = 'backscroll'
      :pull-up-load='true'
      @pullingUp='loadmore'
      >
      <swiper class="swiper" :banners="banners" 
        @swiperload = 'swiperload' 
      ></swiper>
      <!-- 推荐 -->
      <recommend :recommends="recommends"></recommend>
      <!-- tabControl -->
      <tabControl 
        :title="['流行','新款','精选']" 
        style="position:sticky;top:49px"
        @tabClick="tabClick"
        ref="tabControl2"
       ></tabControl>
      <!--商品展示 -->
      <!-- 外部要用 "" -->
      <goodlist :showgood=" computedGood "></goodlist>
    </better-scroll>

    <!-- backtop -->
    <back-top @click.native="backtop" v-show="isshow"></back-top>
    </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import tabControl from "@/components/tabControl";
import Goodlist from "@/components/Good/Goodlist.vue";
import BetterScroll from 'components/bs.vue'
import BackTop from 'components/backTop.vue'

import Swiper from "./Hswiper";
import Recommend from "./Hrecommend";


import { getTotal, getgoodList } from "@/api/home.js";
import {backtopMixins} from 'components/mixins/mixins.js'

import {mapState,mapMutations} from 'vuex'

export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    tabControl,
    Goodlist,
    BetterScroll,
    // BackTop
  },
  // 不需要加”“
  mixins:[backtopMixins],
  data() {
    return {
      banners: [],
      recommends: [],
      // 数据结构
      goodlists: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentIndex: "pop",
      // isshow:false,
      tabHeigth:0,
      tabshow : false
    };
  },
  created() {
    this.getBanner();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted(){
    // 图片加载完成的事件监听 事件总线 非父子接受
    this.$bus.$on('loadimg',()=>{
      this.$refs.scrollt.scroll.refresh()
    })
  },
  computed: {
    computedGood() {
      return this.goodlists[this.currentIndex].list;
    },
  },
  methods: {
    /**
     * 事件监听的方法
     */
    // 列表信息
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
      // backtop  native 组件根元素的原生事件
    // backtop(){
    //   // 元素的dom节点中的属性的属性
    //   // better.scroll 的构造器this.$refs.scrollt.scroll
    //   this.$refs.scrollt.scroll.scrollTo(0,0,500)
    // },
    //返回顶部
    backscroll(pos){
      // console.log(pos)
      // 1。返回顶部
      if(Math.abs(pos.y)>1000){
        this.isshow = true
      }else{
        this.isshow = false
      }
      // 2.吸顶
      if(Math.abs(pos.y)>this.tabHeigth){
        this.tabshow = true
      }else{
        this.tabshow = false
      }

    },
    // 上拉加载更多
    loadmore(){
      // console.log('loadmore')
      this.getGoods(this.currentIndex)
    },
    // 吸顶
    swiperload(){
      // console.log(this.$refs.tabControl2.$el.offsetTop)
      this.tabHeigth = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求
     */
    // 将created中的代码抽离出来 调用自己的方法 页面简洁
    getBanner() {
      getTotal().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 商品列表信息
    getGoods(type) {
      let page = this.goodlists[type].page + 1;
      getgoodList(type, page).then((res) => {
        // 拼接数据
        this.goodlists[type].list.push(...res.data.list);
        this.goodlists[type].page += 1;
        
        // 加载更多 到达底部触发 
        this.$refs.scrollt.scroll.finishPullUp()
      });
    },
  },
  destroyed(){
    this.$bus.$off('loadimg')
  }
 
};
</script>

<style lang='scss' scoped>
.home{
  padding-top: 49px;
}
.fixed{
  position: fixed;
  top: 49px;
  left: 0;
  z-index: 9;

}

</style>