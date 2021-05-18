import Vue from 'vue'
import VueRouter from 'vue-router'

// import Center from '../views/Center.vue'
// import Cinema from '../views/Cinema.vue'
import Films from '../views/Films.vue'
import nowPlaying from '../views/films/nowPlaying.vue'
import comingSoon from '../views/films/comingSoon.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'

// 异步引入 路由懒加载 访问页面的时候进行数据的请求 
const Center = ()=> import ('../views/Center.vue')
const Cinema = ()=> import ('../views/Cinema.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/films',
    component:Films,
    children:[
      {path:'nowPlaying',component:nowPlaying},
      {path:'comingSoon',component:comingSoon},
      {path:'/films',redirect:'films/nowPlaying'}
    ]
  },
  {
    path:'/cinema',
    component:Cinema
  },
  // 不是父子关系  是兄弟关系 一个创建一个销毁
  {
    path:'/cinema/search',
    component:Search
  },
  {
    path:'/center',
    component:Center
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/film/:mid',
    component:Detail
  },
  {
    path:'*',
    redirect:'/films/nowPlaying'
  }
]

const router = new VueRouter({
  routes
})

export default router
