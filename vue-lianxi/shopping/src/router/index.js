import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/home/home.vue'
// import Cart from '@/views/cart/cart.vue'
// import Category from '@/views/category/category.vue'
// import Profile from '@/views/profile/profile.vue'
// 懒加载
const Home = ()=> import ('@/views/home/home.vue')
const Cart = ()=> import ('@/views/cart/cart.vue')
const Category = ()=> import ('@/views/category/category.vue')
const Profile = ()=> import ('@/views/profile/profile.vue')
const Detail =()=>import ('@/views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:Home
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/detail/:iid",
    component:Detail
  },
  {
    path:'/',
    redirect:'/home'
  }
  
]

const router = new VueRouter({
  routes,
  // mode:'history' //没有# hash 有#
})

export default router
