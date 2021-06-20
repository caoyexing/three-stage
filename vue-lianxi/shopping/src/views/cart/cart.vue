<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <better-scroll
     >
      <cart-list  v-for="(item,index) in cartList" :key='index'
        :product='item'
      ></cart-list>
    </better-scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/navbar.vue'
import BetterScroll from 'components/bs.vue'

import CartList from './child/cartList.vue'
import CartBottom from './child/cartBottom.vue'

import {mapState} from 'vuex'
export default {
  components:{
    NavBar,
    BetterScroll,
    CartList,
    CartBottom
  },
  computed:{
    ...mapState('cartModule',['cartList']),
    cartLength(){
      return this.$store.state.cartModule.cartList.length
    }
  },
}
</script>

<style lang='scss' scoped>
.cart{
  padding-top: 49px;
}
.cart-list{
  overflow: hidden;
}

</style>