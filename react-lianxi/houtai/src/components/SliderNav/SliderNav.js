import React, { Component } from 'react'
import style from './slider.module.less'
import {filter} from './filterList'
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
class SliderNav extends Component {
  constructor(){
    super()
    this.state={
      menuData: []
    }
  }
  // 请求数据
  componentDidMount=()=>{
   setTimeout(() => {
      let res = {err:0,msg:'ok',rootIds:['1','2','0']}
      let result = filter(res.rootIds)
      this.setState({menuData:result})
    }, 500);
  }
 
  // 渲染页面 判断请求的数据结构
  renderItem(data){
    // console.log(data)
    // 根据请求的数据进行渲染页面
    if(!data.length) return "暂无数据"
    // 循环遍历其中的数据 查看是否有二级菜单 函数将结果返回出去
    let result = data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={
            <span>
              <Icon type={item.icon}></Icon>
                <span>{item.name}</span>
            </span> }
            key={item.id}
            >
              {/* 递归  判断是否有子节点 */}
              {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
          <MenuItem key={item.id}  >
            <Link to={item.path}>
              <span>
                <Icon type={item.icon}/>
                  <span>{item.name || "🙄"}</span>
              </span>
             </Link>
          </MenuItem>
        )
      }
    })
    return result 
  }

  render(){
    let {menuData} = this.state
    return(
      <Menu  mode="vertical" theme='dark' className={style.menu}>
        {this.renderItem(menuData)}
      </Menu>
    )
  }
}
export default SliderNav