import React, { Component, Fragment } from 'react'
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
  }
  render(){
    let {name,price,desc,foodType,img}=this.state
    return(
      <div>
         name:<input className={styles.ipt} 
         type='text'
         value={name}
         onChange={(e)=>{
           this.setState({name:e.target.value})
          console.log(e.target.value)
         }}
         /> 
        <br/>
        price:<input className={styles.ipt}
          type='text'
          
         />
        <br/>
        foodType:<input className={styles.ipt}
        type='text'
        />
        <br/>
        desc:<input className={styles.ipt} 
        type='text'
        />
        <br/>
        img:<input className={styles.ipt} 
        type='text'
        />
      </div>
    )
  }
}
export default AddGoods