import backTop from 'components/backTop.vue'

// 导出的是对象 import {} from '' 

export const backtopMixins ={
  components:{
    backTop
  },
  data(){
    return{
      isshow:false
    }
  },
  methods:{
     backtop(){
      this.$refs.scrollt.scroll.scrollTo(0,0,500)
    },

  },
  mounted(){
    // console.log('minxins')
  }

}