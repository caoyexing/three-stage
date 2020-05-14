import React, { Component } from 'react'
import style from './login.module.less'
import { UserLogin } from '../../api/user'
import { setItem } from '../../utils/webStorage'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
class Login extends Component {
  // 获取输入的信息 函数中有this 指向login 
  login = () => {
    let { validateFields } = this.props.form
    // console.log(getFieldsValue)
    //获取输入框的内容
    validateFields((err, data) => {
      // console.log(data)
      if (err) return message.error('输入有误，请重新输入', 1)
      let { username, password } = data
      UserLogin(username, password)
        .then((res) => {
          console.log(res)
          // 将返回的数据存进去 使用localStorage的方法存进去
          setItem('token', res.token)
          setItem('uid', res.uid)
          setItem('rootIds', res.rootList)
          message.success('登录成功', 1, () => {
            this.props.history.replace('/admin')
          })
        })
        .catch((err) => {
          console.log(err)
          message.error('请重新登录', 1)
        })
    })
  }
  render() {
    let { getFieldDecorator } = this.props.form
    return (
      <div className={style.content}>
        <Card className={style.card}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                type="text"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <br />
            <Button type="primary" onClick={this.login}
            >
              登录
          </Button>
          </Form.Item>
        </Card>
      </div>
    )
  }

}
export default Form.create()(Login) 