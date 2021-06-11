<template>
  <div class="params" v-if="detailParams">
    <table  v-for="(item,index) in detailParams.sizes"
     :key='index'
     class="size"
     >
      <tr v-for="(tr,indey) in item" :key ='indey'>
        <td v-for="(td,indez) in tr" :key='indez'>
          {{td}}
        </td>
      </tr>
    </table>
  <!-- {{detailParams.info}} -->
  <table class="info">
    <tr v-for="(item,index) in detailParams.info" :key='index'>
      <td class="key">{{item.key}}</td>
      <td >{{item.value}}</td>
    </tr>
  </table>
  <div v-if="detailParams.image.length !== 0">
    <img :src="detailParams.image" alt="">
  </div>
  </div>
</template>

<script>
export default {
  props:{
    detailParams:{
      type:Object,
      default:null
    }
  }

}
</script>

<style lang='scss' scoped>
.params{
  padding: 20px 15px;
  font-size: 14px;

}
.size{
  width: 100%;
  border-collapse: collapse;
}
.size tr{
  height: 42px;
}
.size tr td{
  border-bottom: 1px solid #ddd;
}
.info{
  width: 100%;
  border-collapse: collapse;
}
.info tr{
  height: 42px;
}
.info tr td{
  border-bottom: 1px solid #ddd;
}


</style>