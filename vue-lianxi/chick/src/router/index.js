import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../pages/Recommend.vue'
import Singer from '../pages/Singer/Singer.vue'
import Rank from '../pages/Rank.vue'
import Search from 'pages//Search/Search.vue'
import Detail from '../pages/Detail/Detail.vue'
import Sign from 'pages/User/Sign.vue'
import Modal from 'pages/User/Modal'
Vue.use(VueRouter)
//根据的是地址栏的改变 显示对应的组件
const routes = [
  {path:'/recommend',component:Recommend},
  {path:'/singer',component:Singer,
    children:[
      {path:':mid',component:Detail}
    ]

  },
  {path:'/rank',component:Rank},
  {path:'/search',component:Search},
  {path:'/user',component:Sign},
  {path:'/modal',component:Modal},
  // 重定向
  {path:'/',redirect:'/recommend'}
  
]

const router = new VueRouter({
  routes
})

export default router
