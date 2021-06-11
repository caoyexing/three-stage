<template>
  <div id="app">
     <Tab ></Tab>
       <section>
        <router-view ></router-view>
     </section>
  </div>
</template>
<script>
import Tab from './components/Tabbar'
export default ({
   components:{
    Tab
  }
})
</script>

<style lang="scss" scoped>
section{
  margin-bottom: 90px;
}
</style>
