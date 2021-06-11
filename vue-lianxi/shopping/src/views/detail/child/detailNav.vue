<template>
  <div class="nav">
    <navbar class="navbar">
     <div slot="left">
       <div @click="back">
         <i class="iconfont iconfanhui-copy-copy"></i>
       </div>
     </div>
     <div slot="center" class='center'>
       <ul >
         <li v-for="(item,index) in navbar" :key=index
          :class="currentIndex === index ?'sel' :''"
          @click="currentClick(index)"
         >{{item}}</li>
       </ul>
     </div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/navbar.vue'
export default {
  components:{
    navbar
  },
  data(){
    return{
      navbar:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    currentClick(index){
      this.currentIndex = index
      this.$emit('tabclick',index)
    },
    back(){
      this.$router.back()
    }
  }

}
</script>

<style lang='scss' scoped>
.navbar{
  background-color: #fff;
  border-bottom: 1px solid #eee;
  color: #333;

  .center ul {
    font-size: 13px;
    display: flex;
    justify-content: space-around;
  }
}
.sel{
  color: #f66;
}

</style>