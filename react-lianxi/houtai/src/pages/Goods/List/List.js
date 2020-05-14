import React, { Component } from 'react'
import { Table, Pagination,Button } from 'antd'
import { GetFoods ,DelFood} from '../../../api/goods'
const pageSize = 4
class List extends Component {
  constructor() {
    super()
    this.columns = [
      {
        title: 'id',
        dataIndex: '_id',
        width: 100,
        ellipsis: true
      },
      {
        title: '姓名',
        dataIndex: 'name',
        width:80
      },
      {
        title: '描述',
        dataIndex: 'desc',
        width:80
      },
      {
        title: '价格',
        dataIndex: 'price',
        width:100
      },
      {
        title: '类别',
        dataIndex: 'foodType',
        width:80
      },
      {
        title: '图片',
        dataIndex: 'img',
        width:150,
        render(data) {
          return (
            <img src={data} alt=''></img>
          )
        }
      },
      {
        title: '操作',
        // width:50,
        render() {
          return (
            <Button>删除</Button>
          )
        }
      },
    ]
    this.state = {
      nowPage: 1,
      allCount: 0,
      dataSource: [],
    }
  }
  componentDidMount() {
    this.getTableData(1)
  }
  // 更新页面数据
  getTableData(nowPage) {
    // console.log(nowPage)
    // 获取页面的网络请求
    GetFoods(nowPage, pageSize)
      .then((res) => {
        this.setState({
          dataSource: res.list.foods, allCount: res.list.allCount,
          nowPage: nowPage
        })
      })
  }

  render() {
    let { dataSource, allCount, nowPage } = this.state
    return (
      <div>
        <Table
          dataSource={dataSource}
          columns={this.columns}
          pagination={false}
          rowKey='_id'
        />
        <Pagination
          simple
          // 当前页 每次显示的nowpage
          current={nowPage}
          total={allCount}
          pageSize={pageSize}
          onChange={(page) => {
            // console.log(page)
            this.getTableData(page)
          }}
        />
      </div>

    )
  }

}
export default List