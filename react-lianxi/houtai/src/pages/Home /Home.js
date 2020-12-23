import React,{Component} from 'react'
import Line from '@/components/Echars/Line/Line'
import {getItem} from '@/utils/webStorage'
import {withRouter} from 'react-router-dom'
import styles from './home.module.less'
class Home extends Component{
  componentDidMount(){
    if(!getItem('token')){
      this.props.history.replace('/login')
    }
  }
  back(){
    var a= 10;
    var b= 20;
    console.log('hello')
  }
  render(){
    return(
      <div>
        <Line></Line>
        <div className={styles.content} onClick={this.back}> </div>
      </div>
    )
  }
 
}
export default withRouter(Home) 