import React,{Component} from 'react'
import style from "./add.module.less"
import { Button, message } from 'antd'
import {UpdateFood} from '../../../api/goods'

class Update extends Component{
  constructor(props){
    super()
    // 在组件创建的时候将接收的props结构给state
    this.state={...props.updateInfo}
  }
  // 监听props发生改变
  componentWillReceiveProps(props){
    // console.log('props发生改变了',props)
    // 将重新得到的props 赋值
    this.setState({...props.updateInfo})
  }
  submit=()=>{
    UpdateFood(this.state)
    .then((res)=>{
      // console.log(res)
      message.success('修改成功',1)
      // 将页面重新刷新 props上面的方法
      this.props.refreshList()
    })
  }
  // 换图片
  upload=()=>{
    // ref 那到这个dom
    let file = this.refs.file.files[0]
    if(!file) return message.info('请选择图片')
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      this.setState({img:reader.result})
    }
  }
  render(){
    // console.log(this.props)
    // 图片的地址  要看是什么类型的
    let {_id,name,price,foodType,img,desc} =this.state
    return(
      <div className={style.main}>
        _id:{_id}
        <br/>
       姓名:<input type='text' value={name} onChange={(e)=>{
         this.setState({name:e.target.value})
       }}></input>
       <br/>
        描述:<input type='text' value={desc} onChange={(e)=>{
         this.setState({desc:e.target.value})
       }}></input>
       <br/>
        价格:<input type='text' value={price} onChange={(e)=>{
         this.setState({price:e.target.value})
       }}></input>
       <br/>
        类型:<input type='text' value={foodType} onChange={(e)=>{
         this.setState({foodType:e.target.value})
       }}></input>
       <br/>
       {/* input 是文件格式 ref  获取图片 this.refs */}
        <img src={img} height='100' width='200' alt=''></img>
        图片:<input type='file' ref='file' />
        <button onClick={this.upload}>上传图片</button>
       <br/>
       <Button type='primary' size='large' onClick={this.submit}>
        修改
       </Button>
      </div>
    )
  }
 
}
export default Update