import React,{Component} from 'react'
import style from "./add.module.less"
import { Button, message } from 'antd'
import {addFood} from "../../../api/goods"
class Add extends Component{
  constructor(){
    super()
    this.state={
      name:'紫薯',
      price:'1',
      desc:'紫色的',
      img:null,
      foodType:'根类'
    }
  }
  // 提交接口 this 指向
  submit=()=>{
    if(!this.state.img) return message.info('请选择图片')
    addFood(this.state)
    .then((res)=>{
      // console.log(res)
      message.success('添加成功',1)
    })
    .catch((err)=>{
      message.error('添加失败',1)
    })
  }
  // 读取图片
  upload=()=>{
    // 读取图片格式 将本地的图片的格式转为base64的格式
    let file = this.refs.file.files[0]
    // 判断是否选择图片
    if(!file) return message.info('请选择图片')
    // 创建文件读取对象
    let reader = new FileReader()
    // 将图片读成base64 格式
    reader.onload=()=>{
      // console.log('文件读取结束',reader.result)
      this.setState({img:reader.result})
    }
    reader.readAsDataURL(file)
  }
  render(){
    // 图片的地址  要看是什么类型的
    let {name,price,foodType,img,desc} =this.state
    return(
      <div className={style.main}>
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
        图片:<input type='file' ref='file' />
        <br/>
        <img src={img} height='100' width='100' alt=''></img>
        <button onClick={this.upload}>上传图片</button>
       <br/>
       <Button type='primary' size='large' onClick={this.submit}>
        提交
       </Button>
      </div>
    )
  }
 
}
export default Add