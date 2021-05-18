<template>
  <div class="search">
       <van-search v-model="value" show-action placeholder="请输入搜索关键词" 
       @cancel="onCancel"
       style="z-index:999"
    />
    <van-list>
      <van-cell v-for="item in computedCinema" :key="item.cityId"  >
        <div>{{item.name}}</div>
        <div>{{item.address}}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      value: "",
    };
  },
  computed:{
    ...mapState('CinemaModule',['cinemas']),
    ...mapState('CityModule',['cityId']),
    computedCinema(){
      if( this.value === '') return []
      return this.cinemas.filter((item)=>{
        return item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase())
      })
    }
  },
  mounted() {
    // console.log(this.$store.state.cinemas)
    if (this.cinemas.length === 0) {
      this.setCinema(this.cityId)
    } else {
      console.log("缓存2");
    }
  },
  methods:{
    ...mapActions('CinemaModule',['setCinema']),
    onCancel(){
      this.$router.replace('/cinema')
    }
  }
};
</script>

<style lang='scss' scoped>
.search{
  position: relative;
  .van-search{
    position: sticky;
    top: 0;
  }
}
</style>