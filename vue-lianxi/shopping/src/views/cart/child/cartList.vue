<template>
  <div class="cart-list" >
   <div class="cart-button" >
     <i class="iconfont iconright-1" :class="product.checked?'sel':''" @click="isclick"></i>
   </div>
   <div class="cart-content">
     <div class="cart-img">
       <img :src="product.image" alt="">
     </div>
     <div class="cart-des">
       <p class="cart-title">{{product.title}}</p>
       <p class="cart-desc">{{product.desc}}</p>
       <div class="cart-price">
         <span>{{product.price}}</span>
         <div class="button">
          <button>-</button>
          <button >{{product.count}}</button>
          <button>+</button>
         </div>
       </div>
     </div>

   </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    isclick(){
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style lang='scss' scoped>
.cart-list{
  display: flex;
  height: 160px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.cart-button{
  width: 20px;
  text-align: center;
  line-height: 160px;
}
.cart-content{
  flex: 1;
  display: flex;
  padding: 4px ;
}
.cart-img{
  width: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 14px ;
}
.cart-img img{
  height: 100%;
  width: 100%;
}
.cart-des{
  flex: 1;
  width: 180px;
}

.cart-des p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-title{
  font-size: 16px;
  margin:8px 0 20px 0 ;

}
.cart-desc{
  font-size: 14px;
  color: #f66;
  margin-bottom: 40px;
}
.cart-price{
  display: flex;
  justify-content: space-between;
}
.cart-price span{
  color: #f66;
}
.button button{
  height: 20px;
  width: 20px;

}
.sel{
  color: orangered;
}
</style>