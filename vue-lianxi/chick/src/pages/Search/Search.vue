<template>
  <div class="search">
    <div class="search-box">
      <i class="iconfont iconsousuo"></i>
      <input  name="" id="" class="ipt" @input="search" ref='ipt' placeholder="搜索歌曲 歌手"
        v-model="text"
      >
       <i class="iconfont iconguanbi close" ref="close" @click="guanbi"></i>
    </div>
    <ul class="wrapper" ref='wrapper'>
      <li v-for="(item,index) in changes()" :key='index'>
        {{item}}
      </li>
    </ul> 
    <div class="hot" ref="hot">
      <p>热门搜索</p>
      <ul>
         <li v-for="(item,index) in list" :key='index'
         @click="jump(item.k)">
            {{item.k}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {singerList} from 'api/singer.js'
import {getData} from '../Singer/singer.js'
import {searchData} from 'api/search.js'

export default {
   data(){
      return{
        text:'',
        list:[],
        newList:[]
      }
    },
  methods:{
    // input
    search(){
      var close = this.$refs.close
      var wrapper = this.$refs.wrapper
      var hot = this.$refs.hot
      close.style.display = 'block'
      wrapper.style.display= 'block'
      hot.style.display = 'none'
    },
    // × 
    guanbi(){
      var ipt = this.$refs.ipt
      var close = this.$refs.close
      var wrapper = this.$refs.wrapper
      var hot = this.$refs.hot
      ipt.value =''
      close.style.display = 'none'
      wrapper.style.display = 'none'
      hot.style.display = 'block'
    },
    // 数据绑定
    changes(){
    return this.newList.filter((item)=>{
      return item.includes(this.text)
      })
    },
    jump(data){
      // console.log(data)
      this.text = data
      this.search()
    }
  },
  created(){
    var close = this.$refs.close
    var wrapper = this.$refs.wrapper
    var hot = this.$refs.hot
    searchData()
    .then((res)=>{
      this.list = res.data.hotkey
      this.list.map((item)=>{
       return this.newList.push(item.k)
      })
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
  .wrapper{
    display: none;
    height: 500px;
  }
  .hot{
    padding: 0 20px;
   height: 500px;
   background: #222;
   p{
     margin-left: 10px;
     font-size: 14px;
     color: #666;
   }
   ul{
     li{
      display: inline-block;
      // float: left;
      height: 24px;
      line-height: 24px;
      padding:0 5px;
      color: #888;
      font-size: 12px;
      border: 1px solid #888;
      margin-right: 20px;
      border-radius: 10px;
   }
   } 
  }
}



</style>
