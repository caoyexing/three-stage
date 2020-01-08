import React, { Component } from 'react'
import { Table } from 'antd'
import { GetGoods } from '../../../api/goods'

class GoodsList extends Component {
  constructor() {
    super()
    // 表头
    this.columns = [
      {
        title: 'id',
        dataIndex: '_id',
        // width:100,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        // width:100
      },
      {
        title: '描述',
        dataIndex: 'desc',
        width:200
      },
      {
        title: '价格',
        dataIndex: 'price',
        width:100
      },
      {
        title: '类型',
        dataIndex: 'foodType',
        width:200
      },
      {
        title: '图片',
        dataIndex: 'img',

      }
    ]
    this.state={
      dataSource:[]
    }
  }
  // 数据来自的是网络请求 this.setState 渲染页面v
  // 传入参数 根据后端给的接口文档
  componentDidMount(){
    GetGoods(1,4).then((res)=>{
      console.log(res)
      this.setState({dataSource:res.list.foods})
    })
  }
  render() {
    let {dataSource} = this.state
    return (
      <Table rowKey="_id" dataSource={dataSource} columns={this.columns} />
    )
  }
}
export default GoodsList
