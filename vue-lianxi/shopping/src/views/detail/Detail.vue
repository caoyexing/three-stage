<template>
  <div class="detail" >
    <detail-nav @tabclick="tabclick" ref="nav"></detail-nav>
    <better-scroll 
    :pull-up-load="true" 
    ref="scroll" 
    :probe-type='3'
    @backscroll='domscroll'
    
    >
      <detail-swiper :imgSwiper="imgSwiper" ref="shangpin"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detailInfo="detailInfo" @detailimg="detailimg"></detail-goods-info>
      <detail-params :detailParams="detailParams" ref="params"></detail-params>
      <detail-evaluate :evaluate="evaluate" ref="pinglun"></detail-evaluate>
      <Good-list :showgood="recommend" ref="tuijian"></Good-list>
    </better-scroll>
    <detail-bottom></detail-bottom>
    <back-top v-show="isshow" @click.native="backtop"></back-top>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, Params, getRecommend } from "@/api/detail.js";
import { mapMutations, mapState } from "vuex";

import detailNav from "./child/detailNav";
import detailSwiper from "./child/detailSwiper";
import detailInfo from "./child/detail-info";
import detailShop from "./child/detailShop";
import detailGoodsInfo from "./child/detailGoodsInfo";
import detailParams from "./child/detaiParams";
import detailEvaluate from "./child/detailEvaluate";
import detailBottom from './child/detialBottom'

import betterScroll from "components/bs.vue";
import GoodList from "components/Good/Goodlist";
import backTop from 'components/backTop.vue'
import {backtopMixins} from 'components/mixins/mixins.js'

export default {
  components: {
    detailNav,
    detailSwiper,
    detailInfo,
    detailShop,
    betterScroll,
    detailGoodsInfo,
    detailParams,
    detailEvaluate,
    GoodList,
    detailBottom,
    backTop
  },
  minxins:[backtopMixins],
  data() {
    return {
      uid: "",
      imgSwiper: [],
      goods: null,
      shop: null,
      detailInfo: null,
      detailParams: null,
      evaluate: null,
      recommend: [],
      domScrollY: [],
      isshow :false
    };
  },
  computed: {
    ...mapState("DetailModule", ["isTabShow"]),
  },
  created() {
    // 下部导航栏的隐藏
    this.TabHide(false);

    this.uid = this.$route.params.iid;
    getDetail(this.uid).then((res) => {
      // console.log(res.result);
      // 1.轮播图信息
      this.imgSwiper = res.result.itemInfo.topImages;

      // 2.获取商品信息
      let data = res.result;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods)

      // 3.获取shop信息
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop)

      //4.获取商品信息
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo)

      // 5.获取参数信息
      this.detailParams = new Params(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log(this.detailParams)

      // 6.获取评价信息
      this.evaluate = data.rate;
      // console.log(this.evaluate)
    });
    // 推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
      // console.log(this.recommend)
    });
  },
  methods: {
    ...mapMutations("DetailModule", ["TabShow", "TabHide"]),
    detailimg() {
      this.$refs.scroll.scroll.refresh();
      this.domScrollY = [];
      this.domScrollY.push(0);
      this.domScrollY.push(this.$refs.params.$el.offsetTop);
      this.domScrollY.push(this.$refs.pinglun.$el.offsetTop);
      this.domScrollY.push(this.$refs.tuijian.$el.offsetTop);
      // console.log(this.domScrollY);
      
    },
    tabclick(index) {
      this.$refs.scroll.scroll.scrollTo(0,-this.domScrollY[index],1000)
    },
     domscroll(pos){
      //  console.log(pos)
      if(Math.abs(pos.y)>1000){
        this.isshow = true
      }else{
        this.isshow = false
      }
     
      let length =  this.domScrollY.length
      for( let i = 0 ; i < length ;i++){
       if(this.domScrollY[i] <= Math.abs(pos.y) && this.domScrollY[i+1] >= Math.abs(pos.y)){
         this.$refs.nav.currentIndex = i
       } else if(Math.abs(pos.y) > this.domScrollY[i+1] ){
         this.$refs.nav.currentIndex = i+1
       }
      }
    },
    backtop(){
      this.$refs.scrollt.scroll.scrollTo(0,0,500)
    }
    
  },
  beforeDestroy() {
    // 下部导航栏的显示
    this.TabShow(true);
  },
};
</script>

<style lang='scss' scoped>
.detail {
  padding-top: 49px ;
  height: 100vh;
}
</style>