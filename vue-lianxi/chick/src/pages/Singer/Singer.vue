<template>
  <div class="singer">
    <!-- 歌手列表 -->
    <div class="wrapper">
      <ul class="content">
        <!-- ref  获取dom元素 item.title  a b c d  -->
        <li v-for="(item, index) in singers"
         :key="index"
         :ref='item.title'
         >
          <h3 :class="item.title === selFix?'fixed':''">{{ item.title }}</h3>
          <ol>
            <li v-for="(sItem, sIndex) in item.list" 
            :key="sIndex" 
            class="main"
            @click="jump(sItem.Fsinger_mid)"
            >
              <img :src="sItem.avator" alt="" />
              <span>{{ sItem.Fsinger_name }}</span>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- 索引列表 -->
    <div class="right">
      <ul
       @touchstart='touchstart'
        @touchmove ='touchmove'
        ref="ul"
      >
        <li
          v-for="(item, index) in fIndex"
          :key="index"
          :class="item === selIndex ? 'sel' : ''"
          @click="change(item)"
         
        
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 嵌套的路由 歌手页面 -->
    <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
      id="animate"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { singerList } from "api/singer";
import { getData } from "./singer";
import Bs from "better-scroll";
export default {
  data() {
    return {
      // 自己拼接的想的数据格式
      singers: [
        // {index:'a',list:['a1,a2,a3']}
      ],
      selIndex: "hot",
      selFix:'hot'
    };
  },
  computed: {
    // 计算属性   根据歌手列表显示索引列表
    //  fIndex 直接是一个数据使用
    fIndex() {
      let arr = this.singers.map((item, index) => {
        return item.title;
      });
      return arr;
    },
  },
  methods: {
    // 索引列表的滑动事件 是绑定在ul上面的
    // 点击记录下 距离顶部的距离
    touchstart(){
      this.ulTop = this.$refs.ul.getBoundingClientRect().top
    //  console.log(this.ulTop)
      
    },
    // 记录滑动的距离
    touchmove(e){
      let moveY = e.touches[0].clientY
      this.ulB = this.$refs.ul.getBoundingClientRect().bottom;
      if(moveY < this.ulTop  || moveY > this.ulB){
        return false
      }
      let diff = moveY - this.ulTop
      // console.log(diff)
      let num = Math.ceil(diff / 20) 
      // 索引的列表的滑动是 fIndex 控制的
      let findex =this.fIndex[num -1] 
      // 高亮
      this.selIndex = findex
      // console.log(this.selIndex)
      this.bs.scrollToElement(this.$refs[findex][0])

    },
   
    // 每个li的top 值
    getHeight(){
      let  heights = []
      for(const key in this.$refs){
        //  console.log(this.$refs)
        // 索引列表的dom 元素
        if(key !== 'ul'){
           heights.push(this.$refs[key][0].offsetTop)
        }
      }
      return heights
    },
    // 索引列表点击跳转 跳转到元素 refs
    change(item){
      // console.log(item,this.$refs[item][0])
      // 高亮
      this.selIndex = item
      this.bs.scrollToElement(this.$refs[item][0])

    },
    // 点击跳转歌手页面
    // better-scroll 滚动的页面 点击事件是阻止的 要在配置项里打开
    jump(mid){
      // console.log(mid)
      this.$router.push(`/singer/${mid}`)
    },
    // better-scroll 初始化
    initBs() {
      this.bs = new Bs(".wrapper", {probeType:3, click:true });
    // 事件监听 
      this.bs.on('scroll',(pos)=>{
        // console.log(pos.y)
        // 页面滚动 控制索引高亮
       let heights =  this.getHeight()
      //  是 - 值
       let scrollY  =Math.abs(pos.y) 
       let scrollIndex= 0
        for(var index = 0; index< heights.length -1; index++){
          if(scrollY>=heights[index] && scrollY < heights[index+1]){
            scrollIndex = index
          }else if(scrollY >= heights[heights.length-1]){
            scrollIndex = heights.length -1
          }
        }
        // 高亮
        // console.log(this.fIndex)
      this.selIndex = this.fIndex[scrollIndex]
      })
    },
  },
  created() {
    singerList().then((res) => {
      //将请求的数据像目标格式转换
      this.singers = getData(res.data.list);
    });
  },
  watch: {
    singers() {
      this.$nextTick(() => {
        this.initBs();
      });
    },
  },
};
</script>

<style lang='less'scoped>
@import "~style/index.less";
.singer {
  .wrapper {
    .fixed(88px,0,0,0);
    overflow: hidden;
    background-color: @black;
    h3{
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      padding-left: 20px;
      background-color: #333;
      color: @white_o5;
    }
    .fixed{
      color: yellowgreen;
    }
  
  }
}
.main {
  height: 70px;
  padding: 20px 0 0 30px;
  display: flex;
  align-items: center;
  img {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    color: @white_o5;
  }
}
.right {
  position: fixed;
  right: 6px;
  top: 20%;
  font-size: @fs-xs;
  padding: 20px 0;
  text-align: center;
  border-radius: 10px;
  background-color: #000;
  li {
    height: 20px;
    color: @white_o5;
  }
  // 高亮 内部
  .sel {
    color: @yellow;
  }
  
 
}

// 显示歌手列表 
// 歌手列表滚动
// 显示索引列表    （索引列表时根据歌首列表显示 computed）
// 点击索引列表 歌手列表跳转
// 滑动索引列表 歌手列表滚动
// 点击歌手列表 索引列表滚动
</style>
