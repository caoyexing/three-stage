<template>
  <div class="detailgoodsInfo" v-if="detailInfo">
    <div class="img" v-for="(item,index)  in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" @load="detailimg"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      count: 0,
      imagesLength: 0,
    };
  },
  methods: {
    detailimg() {
      if (++this.count === this.imagesLength) {
        this.$emit("detailimg");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
      console.log(this.imagesLength)
    },
  },
  destroyed(){
  }
};
</script>

<style lang='scss' scoped>
.img img {
  width: 100%;
}
</style>