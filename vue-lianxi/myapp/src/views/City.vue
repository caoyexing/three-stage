<template>
  <div class="city">
    <van-index-bar >
      <div v-for="(item,index) in citys" :key='index'>
      <van-index-anchor :index="item.type" />
      <van-cell v-for="(data,index) in item.list" :key="index" :title="data" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { cityList } from "@/api/city";

export default {
  data(){
    return{
      citys:[]
    }
  },
  mounted() {
    cityList().then((res) => {
      // console.log(res.data.cities);
      this.cityInfo(res.data.cities)
    });
  },
  methods:{
    cityInfo(city){

      let letterArr =[]
      for(var code = 65;code<91;code++ ){
        letterArr.push(String.fromCharCode(code))
      }
      letterArr.forEach((letter)=>{
        const list = city.filter((item)=>{
          console.log(item)
        })
      })
      
      
    }
  }
};
</script>

<style>
</style>