<template>
  <div class="toast" v-show="isshow">
    <div class="toast-message">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {

  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   ismessage:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  data(){
    return{
      message:'',
      isshow:false
    }
  },
  methods:{
    show(message='hello',dura='1000'){
      this.message = message
      this.isshow = true
      setTimeout(()=>{
        this.message = ''
        this.isshow = false
      },dura)
    }
  }
}
</script>

<style lang='scss' scoped>
.toast{
  height: 50px;
  width: 100px;
  background-color: rgba(0,0,0,.8);
  color: #fff;
  line-height: 50px;
  text-align: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
}

</style>