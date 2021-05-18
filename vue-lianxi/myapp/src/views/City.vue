<template>
  <div class="city">
    <van-index-bar :index-list="computedCity" @select="handleSele" highlight-color='gray'>
      <div v-for="(item,index) in cities" :key='index'>
      <van-index-anchor :index="item.type" />
      <van-cell v-for="(data,index) in item.list" :key="index" :title="data.name" 
      @click="handleCity(data.name,data.cityId)"
      />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { cityList } from "@/api/city";
import { mapMutations } from 'vuex'
import { cityInfo } from './city/city'
export default {
  data(){
    return{
      cities:[]
    }
  },
  computed:{
    // 右侧的英文字母 跟随城市的地名变化
    computedCity(){
      return this.cities.map((item)=>{
        return item.type
      })
    }
  },
  mounted() {
    cityList().then((res) => {
      // console.log(res.data.cities);
   this.cities= cityInfo(res.data.cities)
    });
  },
  methods:{
    ...mapMutations('CityModule',['changeName','changeId']),
   
    handleSele(index){
      console.log(index)
    },
    handleCity(name,cityId){
      
      this.changeName(name)
      this.changeId(cityId)
      // console.log(this.$store.state.name,this.$store.state.cityId)
      this.$router.back()
    }
  }
};
</script>

<style>
</style>