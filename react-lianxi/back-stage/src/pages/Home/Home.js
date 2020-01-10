import React, { Component } from 'react'
import Line from '../../components/Line/Line'
import {getItem} from '../../utils/webStorage'
import {withRouter} from 'react-router-dom'
class Home extends Component{
  componentDidMount(){
    // 验证是否有token 没有token 跳转到登陆压面
    if(!getItem('token')){
      this.props.history.replace('/login')
    }
  }
  render(){
    return(
      <div>
        <Line ></Line>
      </div>
    )
  }
}

export default withRouter(Home) 