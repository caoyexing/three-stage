import React, { Component } from 'react'
import style from './header.module.less'
import {withRouter} from 'react-router-dom'
import { Menu, Dropdown, Icon ,notification} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import {UserLogout} from '../../api/user'
import { clear } from '../../utils/webStorage';
const menuData = [
  { path: '', name: '个人设置', icon: 'home' },
  { path: '', name: '个人信息', icon: 'home' },
  { path: '', name: '退出登录', icon: 'home' }
]
//提示框
const openNotificationWithIcon = (type,msg) => {
  notification[type]({
    message: '退出结果',
    description:msg,
    // 提醒关闭时间
    duration:1
  });
};
class HeaderNav extends Component {
  clickMenu=(e)=>{
    // console.log(this)
    let {key}=e
    // console.log(key)
    switch (Number(key)){
      case 2:
        // 退出登录  删除token 
        UserLogout()
        .then((res)=>{
          clear()
          // 通知提醒框
          openNotificationWithIcon('success','退出成功')
        })
        .catch((err)=>{
          // 捕获错误
          // openNotificationWithIcon('error','退出失败')
        })
        break;
    
      default:
        break;
    }
  }
  renderItem() {
    // console.log(this)
    return (
      <Menu onClick={this.clickMenu}>
        {menuData.map((item, index) => {
          return (
            <MenuItem key={index}>
              <span>
                <Icon type={item.icon}></Icon>
                <span>
                  {item.name}
                </span>
              </span>
            </MenuItem>
          )
        })}
      </Menu>
    )
  }
  render() {
    return (
      <Dropdown overlay={this.renderItem(menuData)} className={style.wrap}>
        <span className={style.span}>
          韩梅梅
         <Icon type="down" />
        </span>
      </Dropdown>
    )
  }
}
export default withRouter(HeaderNav) 