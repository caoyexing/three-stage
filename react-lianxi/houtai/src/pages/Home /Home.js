import React,{Component} from 'react'
import Line from '@/components/Echars/Line/Line'
import {getItem} from '@/utils/webStorage'
import {withRouter} from 'react-router-dom'
class Home extends Component{
  componentDidMount(){
    if(!getItem('token')){
      this.props.history.replace('/login')
    }
  }
  render(){
    return(
      <div>
        
        <Line></Line>
      </div>
    )
  }
 
}
export default withRouter(Home) 