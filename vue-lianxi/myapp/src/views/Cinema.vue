<template>
  <!-- 手机的可视窗口的高度不是固定的 -->
  <div class="wrapper">
    <div class="nav">
      <van-nav-bar title="影院" left-text="返回" left-arrow>
        <!--插槽 -->
        <template #left > 
          <div @click='goCity'>
            上海 <van-icon name="arrow-down" color='black' /> 
          </div>
          </template>
        <template #right>
          <van-icon name="search" size="22"  color='black'/>
        </template>
      </van-nav-bar>
    </div>
    <div class="cinema" :style="{ height: height }">
      <ul>
        <li v-for="(item, index) in cinemaList" :key="index">
          <div class="title">{{ item.name }}</div>
          <div class="add">{{ item.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { cinemaInfo } from "../api/cinema";
import BS from "better-scroll";
export default {
  data() {
    return {
      cinemaList: [],
      height: 0,
    };
  },
  mounted() {
    // 可视窗口的高度  要加单位  手机的屏幕的可视窗口不一样  要设置高
    // tab + nav  可视窗口高度 侧边栏
    this.height = document.documentElement.clientHeight - 100 + "px";
    cinemaInfo().then((res) => {
      this.cinemaList = res.data.cinemas;
      // 数据更新 初始化bs
      this.$nextTick(() => {
        var bs = new BS(".cinema", {
          scrollbar: {
            //  false 滚送条会一侧显示
            fade: true,
          },
        });
      });
    });
  },
  methods:{
    goCity(){
      this.$router.push('/city')
    }
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  position: relative;
}
.cinema {
  padding: 10px 10px 0 10px;
  height: 300px;
  overflow: hidden;
  // 右侧的滚动条
  position: relative;
  li {
    margin-bottom: 6px;
    .add {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>