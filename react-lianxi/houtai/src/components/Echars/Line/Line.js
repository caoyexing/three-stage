import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
class Line extends Component{
  constructor(){
    super()
    this.state={
      option :{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          },
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar'
          },

          ]
    }
    }
  }
  render(){
    return(
      <div style={{width:'500px',height:'200px'}}>
        <ReactEcharts option={this.state.option}></ReactEcharts>
      </div>
    )
  }
}
export default Line