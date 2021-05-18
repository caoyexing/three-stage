<template>
  <div id="center">
   <van-tree-select height="100%" :items="items" :main-active-index.sync="active"
   @click-nav="handel"
   >
    <template #content>
     <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    </template>
</van-tree-select>
  </div>
</template>

<script>

export default {
  data(){
    return{
      active:0,
      items: [{ text: '家具' }, { text: '美妆' },{ text: '家电' },{ text: '玩具' },{ text: '彩妆' },{ text: '沙发' }],
    }
  },
  methods:{
    handel(index){
      console.log(index)
    }
  }
}
</script>

<style lang='scss' scoped>


</style>