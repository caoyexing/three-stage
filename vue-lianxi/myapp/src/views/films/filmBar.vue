<template>
  <div class="filmBar">
    <ul>
        <router-link to="/films/nowPlaying" tag="li" active-class="sel">
        <span>正在热映</span>
        </router-link>
        <router-link to="/films/comingSoon" tag="li" active-class="sel">
        <span>即将上映</span>
        </router-link>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style lang='scss' scoped>
.filmBar{
  height: 50px;
  text-align: center;
  line-height: 50px;
    ul{
      display: flex ;
      border-bottom: 1px solid #ededed;      
      li{
        flex: 1; 
      }
    }
}
.sel{
  color: #ff5f16;
  border-bottom: 1px solid #ff5f16;
}
</style>