<template>
<!-- 点击在谁的身上 事件绑定在谁的身上 -->
  <div class="modal" @click.self="goback()">
    <div class="center" v-show="state" >
      <p>姓名:<input class="ipt" type="text" v-model="name" /> </p>
      <p>密码:<input class="ipt" type="text" v-model="pass"/> </p>
      <button @click="signIn">登录</button>
    </div>
    <div class="box">
      <h2>多选框</h2>
      <input type="checkbox" v-model="sub" value="vue">vue
      <input type="checkbox" v-model="sub" value="react">react
      <input type="checkbox" v-model="sub" value="jq">jq
      <button @click="submit()">多选</button>
      <h2>记住用户名</h2>
      <input type="checkbox" v-model="rem">
      <button @click="remember()">rem</button>
    </div>
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return{
      state:true,
      name:'',
      pass:'',
      sub:[],
      rem:false
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    signIn(){
      if(this.name=='' || this.pass==''){
        Toast({
          message: '请输入',
          position: 'top',
          duration: 1000
        });
      }
    },
    // 提交按钮
    submit(){
      console.log(this.sub)
    },
    remember(){
      console.log(this.rem)
    }
  }

}
</script>

<style lang='less' scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #222;
  margin: 0 auto;
  font-size: 14px;
  .center{
    position: absolute;
    top:25%;
    left: 18%;
    border: 1px solid #333;
    padding: 30px;
    text-align: center;
    p{
      margin-bottom: 20px;
      color: hsla(0,0%,100%,.5);
      .ipt{
        text-decoration: none;
        border: none;
        outline: none;
        background-color: #333;
        margin-left: 4px;
        color: #fff;
      }
    }
    button{
      background-color: #333;
      border: none;
      outline: none;
    }
  }
  .box{
    background-color: #fff;
  }
 
}

</style>