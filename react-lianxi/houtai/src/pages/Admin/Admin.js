import React, { Component, Fragment } from 'react'
import { Layout, Icon, Modal } from 'antd';
import style from './admin.module.less'
import SliderNav from '../../components/SliderNav/SliderNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'
import {withRouter} from 'react-router-dom'
const { Header, Sider, Content, Footer } = Layout;
class Admin extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let {tokenModal,setTokenMoal} =this.props
    return (
      <Fragment>
        <Layout className={style.admin}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <SliderNav></SliderNav>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} className={style.header}>
              <Icon
                className={style.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <HeaderNav ></HeaderNav>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
            <Footer>
              Footer
        </Footer>
          </Layout>
        </Layout>
        <Modal
          title="token"
          visible={tokenModal}
         onOk={()=>{
          setTokenMoal(false)
          this.props.history.replace('/login')
         }}
         onCancel={()=>{
          setTokenMoal(false)
         }}
        >
          token出问题了请重新登录
        </Modal> 
      </Fragment>
    )
  }

}
export default connect(state=>state,(diapatch)=>{
  return bindActionCreators(ActionCreator,diapatch)
})(withRouter(Admin) ) 