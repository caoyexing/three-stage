<template>
  <div class="search">
    <div class="search-box">
      <i class="iconfont iconsousuo"></i>
      <input  name="" id="" class="ipt" @change="search" ref='ipt' placeholder="搜索歌曲 歌手"
        v-model="text"
      >
       <i class="iconfont iconguanbi close" ref="close" @click="guanbi"></i>
    </div>
    <ul class="wraper">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import {singerList} from 'api/singer.js'
export default {
  methods:{
    data(){
      return{
        text:''
      }
    },
    search(){
      var close = this.$refs.close
      close.style.display = 'block'
    },
    guanbi(){
      var ipt = this.$refs.ipt
      ipt.value =''
    }
  },
  created(){
    singerList()
    .then((res)=>{
      console.log(res)
    })
  }
}
</script>

<style lang='less' scoped>
@import '~style/index.less';
.search{
  height: 100%;
  .search-box{
    margin: 20px;
    height: 40px;
    width: .w(375);
    background-color:#333 ;
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    i{
      color: #888;
    }
    .ipt{
      margin: 0 5px;
      flex: 1;
      color:#fff ;
      background: #333;
      border:none;
      outline: none;
    }
    .close{
      display: none;
    }
    
   
  }
}



</style>
