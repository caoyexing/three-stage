// 这是一个组件要用js文件 将js文件放入到index.js中

import React,{Component} from 'react'
import {HashRouter,Route,Switch,NavLink,Redirect} from 'react-router-dom'
import Login from '../pages/Login/Loign'
import Admin from '../pages/Admin/Admin'
import Add from '../pages/Goods/Add/Add'
import List from '../pages/Goods/List/List'
import Setting from '../pages/Set/Setting'
import Home from '../pages/Home /Home'
class AppRouter extends Component{
  render(){
   return(
    <HashRouter>
      {/* 地址栏的改变 */}
      <NavLink  to='/login' ></NavLink>
      {/* 组件的渲染 */}
      <Switch>
        <Redirect exact from='/' to='/admin/home'></Redirect>
        <Route  path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return (
            <Admin>
              <Switch>
                <Redirect exact from='/admin' to='/admin/home'></Redirect>
                <Route path='/admin/home' component={Home}></Route>
                <Route path='/admin/setting' component={Setting}></Route>
                <Route path='/admin/goods/add' component={Add}></Route>
                <Route path='/admin/goods/list' component={List}></Route>
              </Switch>
            </Admin>
          )
        }}></Route>
      </Switch>
  </HashRouter>
   )
  }
}
export default AppRouter