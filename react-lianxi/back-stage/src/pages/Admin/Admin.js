import React, { Component } from 'react'
import  styles from './admin.module.less'
import { Layout, Icon } from 'antd';
import {withRouter} from 'react-router-dom'
import SliderNav from '../../components/SliderNav/SliderNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
const { Header, Sider, Content,Footer } = Layout;

class Admin extends Component{
    constructor(){
        super()
        this.state={
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render(){
        return(
            <Layout className={styles.admin}>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
              <SliderNav></SliderNav>
              </Sider>
              <Layout>
                <Header 
                  className={styles.header}
                  // style={{ background: '#fff', padding: 0 }}
                  >
                  <Icon
                    className={styles.trigger}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <HeaderNav></HeaderNav>
                </Header>
                <Content 
                  className={styles.content}
                  // style={{
                  //   margin: '24px 16px',
                  //   padding: 24,
                  //   // background: '#fff',
                  //   minHeight: 280,
                  // }}
                >
                  {this.props.children}
                </Content>
              <Footer className={styles.footer}>这是底部</Footer>
            </Layout>
          </Layout>
        )
    }
}
export default withRouter(Admin)  