<template>
  <div id="nav">
    {{state.myname}}
    <button @click="changeName">changName</button>
  </div>
</template>
<script>
// 引入
import {reactive} from 'vue'
export default {
  setup(){
    // reactive 响应式 数据
   const state = reactive({
     myname:'kerwin'
   })
  //  箭头函数 
   const changeName = ()=>{
     state.myname = 'xiaoming'
   }
   return{
     state,
     changeName
   }
  }
}

</script>

<style lang="scss">

</style>
