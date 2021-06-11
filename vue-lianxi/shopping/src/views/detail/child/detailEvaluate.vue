<template>
  <div class="evaluate" v-if="evaluate">
   <div class="header">
     <div>用户评价</div>
     <div>
       更多
     </div>
   </div>
   <div class="center">
     <img :src="evaluate.list[0].user.avatar" alt="">
     <span>{{evaluate.list[0].user.uname}}</span>
   </div>
   <div class="info">
     <div class="content">
       {{evaluate.list[0].content}}
     </div>
   </div>
   <div class="bottom">
     <span>{{evaluate.list[0].created | showtime}}</span>
   </div>
   <div class="imgs" v-for="(item,index) in evaluate.list[0].images" :key='index'>
     <img :src="item" alt="">
   </div>
  </div>

</template>

<script>
import moment from 'moment'
export default {
  props:{
    evaluate:{
      type:Object,
      default:{}
    }
  },
  filters:{
    showtime(time){
      return moment(time*1000).format('YYYY-MM-DD')
    }
  },
  updated(){
    // console.log(this.evaluate)
  }

}
</script>

<style lang='scss' scoped>
.evaluate{
  padding: 0 15px;
}
.header{
  display: flex;
  justify-content:space-between;
}
.center{
  margin-top: 20px;
  line-height: 50px;
}
.center img{
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
// info

.content{
  font-size: 14px;
  color: #ddd;
  margin-bottom: 10px;

}
.bottom{
  color: #ddd;
  margin-bottom: 10px;
}
.imgs img{
  height: 100px;
  width: 100px;
}

</style>