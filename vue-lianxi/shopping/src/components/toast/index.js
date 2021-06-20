import Vue from "vue"
//这个组织当做一个大的对像
import Toast from './toast.vue'

const toast = {}

toast.install = ()=>{
  // 1.不能直接获取到dom元素 组件构造器
  const toastconstructor = Vue.extend(Toast)
  // 2.new 的方式 根据组件构造器 可以创造出来一个组件对象
  const toast = new toastconstructor()
  // 3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el 就是 div
  document.body.appendChild(toast.$el)
  // console.log(toast.$el)
  Vue.prototype.$toast = toast

}
export default toast