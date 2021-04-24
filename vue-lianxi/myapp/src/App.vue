<template>
  <div id="app">

    <section>
      <router-view></router-view>
    </section>

    <tab></tab>
  </div>
</template>
<script>
import tab from './components/tab'
export default {
  components:{
    tab
  },
 data(){
   return{
    
   }
 }
}
</script>
<style lang="scss">
section{
  margin-bottom: 50px;
}
</style>
