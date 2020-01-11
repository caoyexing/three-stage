import React, { Component} from 'react'
import styles from "./headerNav.module.less"
import { Menu, Dropdown, Icon ,notification} from 'antd';
import {UserLogout} from '../../api/user'
import {clear} from '../../utils/webStorage'

const menuData = [
  {path:'',name:'个人信息',icon:'apple'},
  {path:'',name:'个人设置',icon:'home'},
  {path:'',name:'退出登陆',icon:'user'}
]
const openNotificationWithIcon = (type,msg )=> {
  notification[type]({
    message: 'Hello World',
    description:msg,
    duration:1
  });
};


class HeaderNav extends Component{
  clickMenu=(e)=>{
    let {key}=e
    switch (Number(key)) {
      case 2:
        UserLogout()
        .then((res)=>{
          clear()
          // console.log(res)
          openNotificationWithIcon('success','退出成功')
        })
        .catch((err)=>{
          // console.log(err)
          openNotificationWithIcon('error','退出失败请重试')
        })
        break;
    
      default:
        break;
    }
  }
  renderMenu(menuData){
    return(
      <Menu onClick={this.clickMenu}>
        {menuData.map((item,index)=>{
          return(
            <Menu.Item key={index} >
              <span>
                <Icon type={item.icon} key={index} />
                <span>{item.name}</span>
              </span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
  render(){
    return(
      <Dropdown overlay={this.renderMenu(menuData)} className={styles.drop}>
      <a className="ant-dropdown-link" href="#">
       韩梅梅 <Icon type="down" />
      </a> 
    </Dropdown>
    )
  }
}
export default HeaderNav
