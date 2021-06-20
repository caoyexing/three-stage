<template>
  <div class="cart-bottom">
    <div class="cart-all">
      <i class="iconfont iconright-1" :class="issel?'sel':''" @click="noAll"></i>
      <span>全选</span>
    </div>
    <div class="cart-total">
      <span>合计 {{allTotal}}</span>
    </div>
    <div class="cart-cal" @click="jisuan">
      <span>去计算{{allCal}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 操作的是vuex中的数据
    ...mapState("cartModule", ["cartList"]),
    //合计
    allTotal() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    // 计算
    allCal() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    // 全选
    issel() {
      // 
      if (this.cartList.length === 0) return false;

      return !this.cartList.find((item) => {
        // 查到到有没选中的item 返回true  在取反
        return !item.checked;
      });
    },
  },
  methods: {
    noAll() {
      // 是true 是全选的状态 取反 
      if (this.issel) {
        this.cartList.filter((item) => (item.checked = false));
      } else {
        this.cartList.filter((item) => (item.checked = true));
      }
    },
    jisuan(){
      if(!this.issel){
        this.$toast.show('请选择商品')
      }
    }

  },
};
</script>

<style lang='scss' scoped>
.cart-bottom {
  height: 40px;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  bottom: 56px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-all {
  width: 100px;
}
.cart-total {
  width: 120px;
}
.cart-cal {
  flex: 1;
  height: 40px;
  background-color: #f66;
  line-height: 40px;
}
.sel {
  color: #f66;
}
</style>