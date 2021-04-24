<template>
  <div class="my-tab">
    <ul class="list">
      <router-link
      v-for="(item,index) in tabs"
      :key='index'
      :to="item.path"
      tag="li"
      active-class="sel"
      >
        <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 控制的是地址栏的显示 不改变内容的显示
      tabs:[
        {name:'推荐',path:'/recommend'},
        {name:'歌手',path:'/singer'},
        {name:'排行',path:'/rank'},
        {name:'搜索',path:'/search'}
      ]
    }
  }

}
</script>

<style lang='less' scoped>
@import '~style/index.less';
.list{
  height: 44px;
  .w(375);
  background-color: @black;
  color: @white_o5;
  display: flex;
  li{
    width: 25%;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: #ddd;
    span{
      padding-bottom: 5px;
    }
    
  }
}
.sel span{
  color: @yellow;
  border-bottom: 2px solid @yellow;
}

</style>