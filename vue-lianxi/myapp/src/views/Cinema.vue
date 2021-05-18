<template>
  <!-- 手机的可视窗口的高度不是固定的 -->
  <div class="wrapper">
    <div class="nav">
      <van-nav-bar title="影院" left-text="返回" left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <!--插槽 -->
        <template #left>
            {{ name }}<van-icon name="arrow-down" color="black" />
        </template>
        <template #right>
          <van-icon name="search" size="22" color="black" />
        </template>
      </van-nav-bar>
    </div>
    <div class="cinema" :style="{ height: height }">
      <ul>
        <li v-for="(item, index) in cinemas" :key="index">
          <div class="title">{{ item.name }}</div>
          <div class="add">{{ item.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      // cinemaList: [],
      height: 0,
    };
  },
  computed:{
    ...mapState('CityModule',['name','cityId']),
    ...mapState('CinemaModule',['cinemas'])
  }
  ,
  mounted() {
    // 可视窗口的高度  要加单位  手机的屏幕的可视窗口不一样  要设置高
    // tab + nav  可视窗口高度 侧边栏
    this.height = document.documentElement.clientHeight - 100 + "px";

    // 异步数据请求将数据存进到store中
    if (this.cinemas.length === 0) {
      this.setCinema(this.cityId).then((res) => {
         this.$nextTick(() => {
         var bs = new BS(".cinema", {
          scrollbar: {
            //  false 滚送条会一侧显示
            fade: true,
          },
        });
      });
        });
    } else {
      console.log("缓存");
      this.$nextTick(() => {
        var bs = new BS(".cinema", {  
          scrollbar: {
            //  false 滚送条会一侧显示
            fade: true,
          },
        });
      });
    }
  },
  methods: {
    ...mapActions('CinemaModule',['setCinema']),
    ...mapMutations('CinemaModule',['getCinema','deleList']),
    onClickLeft() {
      //换城市的时候，不需要使用缓存的数据，要用新的id请求新的城市，将cinemas的数据清空
      // this.$store.state.cityList = [];
      // 不能直接修改数据 要通过store 
      this.deleList()
      this.$router.push("/city");
    },
    onClickRight(){
      this.$router.push('/cinema/search')
    }
  },
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