<template>
  <div class="tab">
    <ul>
      <router-link v-for="(item,index) in tabs" 
      :key='index' 
      tag="li"
      :to='item.path'
      active-class="sel"
      >
       <i class="iconfont" :class="item.icon"></i>
       <span>{{item.name}}</span> 
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabs:[
        {name:'电影',path:'/films',icon:'icondianyingyuan'},
        {name:'影院',path:'/cinema',icon:'iconyingyuan'},
        {name:'我的',path:'/center',icon:'iconwode2'}
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
.tab{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  text-align: center;
  line-height:20px;
  z-index: 1;
  ul{
    display: flex;
    border-top: 1px solid #ededed;
    background-color: #fff;
    li{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      i{
        font-size: 22px;
      }
      span{
        font-size: 12px;
      }
    }
  }
}

.sel{
  color: #ff5f16;
  
}
</style>
