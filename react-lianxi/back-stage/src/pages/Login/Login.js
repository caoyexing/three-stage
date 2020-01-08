import React, { Component } from 'react'
import styles from './login.module.less'
import {UserLogin} from '../../api/user'
import {setItem} from '../../utils/webStorage'
import {Card,message, Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends Component{
  // 
  login=()=>{
    let {validateFields}=this.props.form
    validateFields((err,data)=>{
      // console.log(err,data)
      // message 全局提示 message 吐丝
      message.destroy()
      if(err) return message.error('输入有误，请重新输入')
      let {userName,passWord} =data
      UserLogin(userName,passWord)
      .then((res)=>{
        // console.log(res)
        setItem('token',res.token)
        setItem('uid',res.uid)
        setItem('rootIds',res.rootList)
        message.success('登陆成功',1,()=>{
          this.props.history.replace('/admin')
        })
      })
      .catch((err)=>{
        message.error('登陆失败请重新登陆',1)
      })
    })
  }
  render(){
    // console.log(this)
    // 报错没有的时候要加上Form.create()()
    const { getFieldDecorator } = this.props.form
    return(
      // form 存在默认事件
      <div className={styles.login}>
      <Card title={'请登录'} headStyle={{textAlign:"center"}} hoverable={true} className={styles['login-card']}>
      <Form.Item>
        {getFieldDecorator('userName', {
          // [{之间有课空格的时候 会报一个警告}]
          rules: [{required: true, message: '用户名不能为空!' },
            {min:3,message:'用户名不能小于3位'},
            {max:9,message:'用户名不能大于9位'}
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('passWord', {
          rules: [{ required: true, message: '用户名密码不能为空!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
       <Checkbox>Remember me</Checkbox>)}
        {/* <a className="login-form-forgot" href=""> */}
          Forgot password
        {/* </a> */}
        <br/>
        <Button type="primary" onClick={this.login} >
          Log in
        </Button>
        &nbsp;&nbsp;Or 
        {/* <a href=""> */}
        &nbsp;&nbsp;register now!
          {/* </a> */}
      </Form.Item>
    </Card>
    </div>
    )
  }
}
export default Form.create()(Login) 