import React, { Component } from 'react'
import {HashRouter,NavLink,Route,Switch} from 'react-router-dom'
import Login from '../pages/Login/Login'
// import Home from '../pages/Home/Home'
// import Setting from '../pages/Set/Set'
import Admin from '../pages/Admin/Admin'
class AppRouter extends Component{
  render(){
    return(
      <HashRouter>
        {/* link */}
        <NavLink to='/login'></NavLink>
        {/* route */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default AppRouter