<template>
  <!-- v-if  每次页面开始第一次渲染的时候 会在null中取name 当有数据的时候开始渲染 -->
  <!-- swiper 不动的情况下是 初始化过早 现在的v-if也是判断的一种 避免了初始话过早 -->
  <div class="detial" v-if="filmInfo">
    <!--指令控制dom元素 -->
    <detail-header v-top :name="filmInfo.name"></detail-header>
    <div class="top">
      <div
        :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
        style="
          height: 210px;
          width: 100%;
          background-size: cover;
          background-position: center;
        "
      ></div>
    </div>
    <div class="info">
      <div class="film-name">
        <span>{{ filmInfo.name }}</span>
        <span>{{ filmInfo.filmType.name }}</span>
      </div>
      <div class="category">
        <div>
          {{ filmInfo.category }}
        </div>
      </div>
      <div class="film-time">
        <div>{{ filmInfo.premiereAt | datafilter }} 上映</div>
      </div>
      <div class="runtime">
        <div>{{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟</div>
      </div>
      <!-- 动态绑定的calss 移出添加类名-->
      <div :class="isshow ? '' : 'text'" class="text-info">
        <div>{{ filmInfo.synopsis }}</div>
      </div>
      <div class="font">
        <i
          class="iconfont"
          :class="isshow ? 'iconxiangshang' : 'iconxiangxia'"
          @click="isshow = !isshow"
        ></i>
      </div>
      <div class="actor-wraper">
        <h3>演职人员</h3>
        <!--组件 类名 -->
        <detail-swiper :slide="4" swiperclass="actor">
          <div
            class="swiper-slide slide"
            v-for="(item, index) in filmInfo.actors"
            :key="index"
          >
            <img :src="item.avatarAddress" alt="" />
            <div>{{ item.name }}</div>
            <div>{{ item.role }}</div>
          </div>
        </detail-swiper>
      </div>
      <div class="photo-wraper">
        <h3>剧照</h3>
        <!--组件 -->
        <detail-swiper :slide="2" swiperclass="photo">
          <div
            class="swiper-slide"
            v-for="(item, index) in filmInfo.photos"
            :key="index"
          >
            <div
              :style="{ backgroundImage: 'url(' + item + ')' }"
              style="
                height: 150px;
                width: 100%;
                background-size: cover;
                background-position: center;
              "
              @click="imageBig(index)"
            ></div>
          </div>
        </detail-swiper>
      </div>
    </div>
  </div>
</template> 

<script>
import { getInfo } from "../api/detail";
import Vue from "vue";
import moment from "moment";
import DetailSwiper from "./details/DetailSwiper";
import DetailHeader from "./details/DetailHeader";
import { ImagePreview, Toast } from "vant";
import {mapMutations, mapState} from 'vuex'
Vue.filter("datafilter", (data) => {
  return moment(data * 1000).format("YYYY-MM-DD");
});
Vue.directive("top", {
  // 指令
  inserted(el) {
    el.style.display = "none";
    // 滚动事件 离开页面的时候也会滚动 曲线
    window.onscroll = () => {
      // console.log('hello')
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) > 50
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  // 解绑 window 事件 换页面滚动的时候也会触发scroll事件
  unbind() {
    window.onscroll = null;
  },
});
export default {
  components: {
    DetailSwiper,
    DetailHeader,
  },
  data() {
    return {
      // 结果是一个大对象
      filmInfo: null,
      isshow: false,
    };
  },
  computed:{
    ...mapState('TabModule',['isTab'])
  },
  mounted() {
    // console.log(this.isTab)
    this.hide(false)
    // 跳转 id
    let { mid } = this.$route.params;
    getInfo(mid).then((res) => {
      // console.log(res.data.film)
      this.filmInfo = res.data.film;
      // console.log(this.filmInfo);
      Toast.clear()
    });
  },
  beforeDestroy(){
    this.show(true)
  },
  methods: {
    ...mapMutations('TabModule',['show','hide']),
    imageBig(index) {
      // 图片预览
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.info {
  height: 164px;
  padding: 12px 15px 15px;
  color: #797d82;
  .category {
    margin: 4px 0;
  }
  .film-time {
    margin: 4px 0;
  }
  .runtime {
    margin: 4px 0;
  }
  .text {
    height: 40px !important;
    overflow: hidden;
    margin-top: 14px;
  }
  .text-info {
    font-size: 12px;
  }
  .font {
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-top: 4px;
  }
  .slide img {
    height: 100px;
  }
}
</style>