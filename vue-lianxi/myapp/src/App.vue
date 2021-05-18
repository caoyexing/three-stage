<template>
  <div id="app">
      <tab v-show='isTab'></tab>
    <section>
      <router-view></router-view>
    </section>

    
  </div>
</template>
<script>
import tab from './components/tab'
import {mapState} from 'vuex'
export default {
  components:{
    tab
  },
 data(){
   return{
    ...mapState(['isTab'])
   }
 }
}
</script>
<style lang="scss">
section{
  margin-bottom: 50px;
}
// 300ms 确认用户的是点击还是双击操作 
// 禁用双击操作   meta标签+ *{}
*{
  touch-action: manipulation;
}

</style>
