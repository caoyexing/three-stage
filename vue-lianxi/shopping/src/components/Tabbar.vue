<template>
<!-- 下侧的导航栏 -->
  <div class="tab" v-if="isTabShow">
    <ul>
      <router-link v-for="(item,index) in tabs" :key='index' 
      :to='item.path'
      tag="li"
      active-class="sel"
      >
        <i class="iconfont" :class="item.icon"></i>
        <p>{{item.name}}</p> 
      </router-link>
    </ul>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      tabs:[
        {name:'首页',icon:'iconshouye',path:'/home'},
        {name:'分类',icon:'iconfenlei',path:'/category'},
        {name:'购物车',icon:'icongouwuche1',path:'/cart'},
        {name:'我的',icon:'iconwode',path:'/profile'}
      ]
    }
  },
  computed:{
    ...mapState('DetailModule',['isTabShow'])
  }
}
</script>
<style lang='scss' scoped>
.tab{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  padding-top: 6px;
  box-shadow: 0 -1px 1px rgba(100,100,100,.9);
  background-color: #fff;
  z-index: 999;
  ul{
    display: flex;
    li{
      width: 25%;
      i{
        font-size: 22px;
      }
      p{
        font-size: 14px;
      }
    }
  }
}
.sel{
  color: #f66;
}

</style>