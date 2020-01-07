import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
const menuData = [
  {path:'',name:'个人信息',icon:'smlile'},
  {path:'',name:'个人设置',icon:'home'},
  {path:'',name:'推出登陆',icon:'user'}
]
class HeaderNav extends Component{
  renderMenu(menuData){
    return(
      <Menu >

      </Menu>
    )
  }
  render(){
    return(
      <Dropdown overlay={this.renderMenu(menuData)}>
      <a className="ant-dropdown-link" href="#">
       韩梅梅 <Icon type="down" />
      </a>
    </Dropdown>
    )
  }
}
export default HeaderNav
