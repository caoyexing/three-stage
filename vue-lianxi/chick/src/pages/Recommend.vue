<template>
  <div class="recommend">
    <div class="wrapper">
      <!--  -->
      <ul class="content">
        <banner :banners="slides"></banner>
        <h1 class="hot">热门歌单推荐</h1>
        <li v-for="(item, index) in list" :key="index">
          <div class="icon">
            <img :src="item.proimg" alt="" />
          </div>
          <div class="text">
            <h2>{{ item.brand }}</h2>
            <p>{{ item.category }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from "../components/banner";
import { getList } from "../api/recommend";
import BS from "better-scroll";
export default {
  components: {
    banner,
  },
  data() {
    return {
      slides: [
        "https://img.zcool.cn/community/01841d5fd34cc011013fdcc7766065.jpg",
        "https://img.zcool.cn/community/01df875fd1b55111013ee04d5bf4d5.png",
        "https://img.zcool.cn/community/01f0325fd1b58d11013fdcc72bfd07.png",
      ],
      list: [],
    };
  },
  methods: {
    initBS() {
      this.bs = new BS(".wrapper", {});
    },
  },
  created() {
    getList().then((res) => {
      this.list = res.data;
    });
  },
  // mounted() {
  //   // 初始化 有了dom对象
  //   this.initBS();
  // },
  watch: {
    list(newV, oldV) {
      this.$nextTick(() => {
        this.initBS();
      });
    },
  },
};
</script>

<style lang='less' scoped>
@import "~style/index.less";
.hot {
  height: 65px;
  color: @yellow;
  font-size: 14px;
  line-height: 65px;
  text-align: center;
  background-color: @black;
}
.wrapper {
  position: fixed;
  top: 88px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: @black;
  overflow: hidden;
}
.content li {
  height: 62px;
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: center;
}
.icon img {
  height: 60px;
  width: 60px;
  margin-right: 20px;
}
.text {
  width: 255px;
  height: 50px;
}
.text h2 {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
}
.text p {
  color: @white_o5;
  font-size: 14px;
}
</style>
