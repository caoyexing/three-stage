<template>
  <div class="nowPlaying" style="margin-top: 14px">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="end"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="item in datalist"
        :key="item.filmId"
        @click="jump(item.filmId)"
      >
        <div class="img">
          <img :src="item.poster" alt="" />
        </div>
        <div class="info">
          <p>
            <span class="name">{{ item.name }}</span>
            <span class="filmtype">{{ item.filmType.name }}</span>
          </p>
          <p>
            <span class="audience"> 观众评分:</span>
            <span class="grade"> {{ item.grade }}</span>
          </p>
          <p class="starinfo">主演: {{ item.actors | star }}</p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { filmsList } from "../../api/films";
import Vue from "vue";
Vue.filter("star", (actors) => {
  // console.log(actors)
  return actors
    .map((item) => {
      return item.name;
    })
    .join(" ");
});
export default {
  data() {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1, //当前显示的页数
      total: 0, //总数据条数
    };
  },
  mounted() {
   
    //  列表请求
    // ajax 请求
    // 请求数据的拼接
    // onloade 函数
    filmsList(this.current).then((res) => {
      this.datalist = res.data.films;
      this.total = res.data.total;
      
    });
  },
  methods: {
    // immediate-check   第一次的load 不触发
    onLoad() {
      if (this.datalist.length === this.total) {
        this.finished = true;
        return false;
      }
      console.log("load");
      this.current++;

      filmsList(this.current).then((res) => {
        this.datalist = [...this.datalist, ...res.data.films];

        this.loading = false;
      });
    },

    jump(id) {
      this.$router.push(`/film/${id}`);
    },
  },
};
</script>

<style lang='scss' scoped>
.img {
  img {
    height: 100px;
    width: 66px;
    margin-right: 10px;
    border: 1px solid red;
    float: left;
  }
}
.info {
  width: 230px;
  float: left;
  .name {
    color: #000;
    font-size: 16px;
  }
  .filmtype {
    display: inline-block;
    height: 20px;
    width: 22px;
    color: #fff;
    background-color: #d2d6dc;
    font-size: 14px;
  }
  .audience {
    color: #ddd;
    font-size: 14px;
  }
  .grade {
    color: #ffb232;
    font-size: 16px;
  }
  .starinfo {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: gray;
  }
}
</style>