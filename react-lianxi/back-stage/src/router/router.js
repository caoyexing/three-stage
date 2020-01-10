import React, { Component } from 'react'
import {HashRouter,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Setting from '../pages/Set/Set'
import Admin from '../pages/Admin/Admin'
import GoodsList from '../pages/Goods/List/List'
import GoodsAdd from '../pages/Goods/Add/Add'
class AppRouter extends Component{
  render(){
    return(
      <HashRouter>
        {/* link */}
        <NavLink to='/login'></NavLink>
        {/* route */}
        <Switch>
          {/*打开页面的时候 有token进入到home页面 没有token进入到登陆页面 */}
          <Redirect exact from='/' to='/admin/home'></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Switch>
                  <Redirect exact from='/admin' to='/admin/home'></Redirect>
                  <Route path='/admin/home' component={Home}></Route>
                  <Route path='/admin/setting' component={Setting}></Route>
                  <Route path='/admin/goods/list' component={GoodsList}></Route>
                  <Route path='/admin/goods/add' component={GoodsAdd}></Route>
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