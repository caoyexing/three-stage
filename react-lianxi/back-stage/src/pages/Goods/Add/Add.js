import React, { Component } from 'react'
import styles from './add.module.less'
class AddGoods extends Component{
  constructor(){
    super()
    this.state={
      name:'红烧肉',
      price:'199',
      img:null,
      desc:'好吃',
      foodType:'热菜'
    }
    // 为了this的指向
    // upload=()=>{
    //   // 获取图片
      
    // }
  }
  render(){
    let {name,price,desc,foodType,img}=this.state
    return(
      <div>
         name:<input className={styles.ipt} 
         type='text'
         value={name}
         onChange={(e)=>{
           //事件
           this.setState({name:e.target.value})
          console.log(e.target.value)
         }}
         /> 
        <br/>
        price:<input className={styles.ipt}
          type='text'
          value={price}
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}
          
         />
        <br/>
        foodType:<input className={styles.ipt}
        type='text'
        value={foodType}
        onChange={(e)=>{
          this.setState({foodType:e.target.value})
        }}
        />
        <br/>
        desc:<input className={styles.ipt} 
        type='text'
        value={desc}
        onChange={(e)=>{
          this.setState({desc:e.target.value})
        }}
        />
        <br/>
        图片:<input className={styles.ipt} type='file' ref='file'/>
        <img height='100' width='100' src={img} alt=''></img>
        <button onClick={this.upload}>上传图片</button>
      </div>
    )
  }
}
export default AddGoods