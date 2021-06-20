<template>
<!-- 中间的推荐 -->
  <div class="control">
   <div class="control-item" v-for="(item,index) in title" :key='index'
    :class="index=== currentIndex? 'active':''"
    @click="currentColor(index)"
   >
     <span >{{item}}</span>
   </div>
  </div>
</template>

<script>
export default {
  props:{
    title:Array,
    default(){
      return []
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    currentColor(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }

}
</script>

<style lang='scss' scoped>
.control{
  display: flex;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  
  .control-item{
    flex: 1;
    span{
      padding: 5px;
    }
  }
}
.active{
  color: #f66;
}
.active span{
  border-bottom: 2px solid #f66;
}

</style>