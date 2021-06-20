<template>
  <div class="main" ref="wrapper" :style="{height:heigth}">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
     pullUpLoad:{
      type:Boolean,
      default :false
    }
  },
  data(){
    return{
      scroll:null,
      height:0
    }
  },
  created(){
    this.heigth = document.documentElement.clientHeight - 106+ 'px'
  },
  mounted(){
    // 1.创建scroll对象
    this.scroll = new BS(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      // 获取content中的dom 重新计算
      observeDOM:true,
    })
    //2.监听滚动的位置
    if(this.probeType === 2 || this.probeType ===3){
      this.scroll.on('scroll',(pos)=>{
      this.$emit('backscroll',pos)
      // console.log(pos)
    })
    }
    // 3.监听滚动到底部 加载
    if(this.pullUpLoad){
       this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    }
   
  },
 

}

</script>

<style lang='scss' scoped>
.main{
  overflow: hidden;
}
</style>