import React, { Component, Fragment } from 'react'
import { Table, Pagination, Spin, Button, Popconfirm, message } from 'antd'
import { GetGoods, DelData } from '../../../api/goods'
import styles from './page.module.less'

const pageSize = 3
class GoodsList extends Component {
  constructor() {
    super()
    // 表头
    this.columns = [
      {
        title: 'id',
        dataIndex: '_id',
        width: 100,
        // 单元格自动折叠 站一行 不会影响整个表格的宽度
        ellipsis: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        width: 100,
        ellipsis: true,
      },
      {
        title: '描述',
        dataIndex: 'desc',
        width: 80,
        ellipsis: true,
      },
      {
        title: '价格',
        dataIndex: 'price',
        width: 80
      },
      {
        title: '类型',
        dataIndex: 'foodType',
        width: 100,
        // ellipsis: true,
      },
      {
        title: '图片',
        //img没有这个dataIndex的时候输出的data是一个完整的地址
        dataIndex: 'img',
        width: 250,
        render(data) {
          // console.log(data)
          return (
            <img src={data} width='100' height='100' alt='' />
          )
        }
      },
      {
        title: '操作',
        width: 150,
        // fixed: 'right',
        // render(){} 这个里面没有this 变成
        render: (data) => {
          return (
            <Fragment >
              {/* 气泡确认框 */}
              <Popconfirm
                title='确认要删除吗'
                onConfirm={() => {
                  // 点击删除的时候触发的函数 
                  this.delData(data._id)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type="danger" size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small'>修改</Button>
            </Fragment>
          )
        }
      }
    ]
    this.state = {
      spinning: false,
      dataSource: [],
      nowPage: 1,
      allCount: 0,
    }
  }
  // 数据来自的是网络请求 this.setState 渲染页面v
  // 传入参数 根据后端给的接口文档
  componentDidMount() {
    // 每次的页数重新变化的时候 会重新渲染页面
    this.getTable(1)
  }
  delData(id) {
    let { nowPage } = this.state
    // 网络请求
    DelData(id).then((res) => {
      // console.log(res)
      message.success('删除成功', 1)
      this.getTable(nowPage)
    })

  }
  // 更新页面数据
  getTable(nowPage) {
    // 根据页数获取网络请求 数据请求前的转圈圈
    this.setState({ spinning: true })
    GetGoods(nowPage, pageSize).then((res) => {
      // console.log(res) 
      if (nowPage > Math.ceil(res.list.allCount / 3)) {
        this.setState({ nowPage: Math.ceil(res.list.allCount / 3) })
        this.getTable(nowPage - 1)
      } else {
        this.setState({ nowPage: nowPage })
      }
      this.setState({
        dataSource: res.list.foods,
        allCount: res.list.allCount,
        spinning: false,
        nowPage: nowPage
      })
    })
  }
  render() {
    let { dataSource, allCount, spinning, nowPage } = this.state
    return (
      <div className={styles.content}>
        <Spin spinning={spinning}>
          <Table
            rowKey="_id"
            dataSource={dataSource}
            columns={this.columns}
            scroll={{ y: 400 }}
            // 分页器 自带的分页器 取消
            pagination={false}
            // className={styles.table}
            rowClassName={styles.row}
          />
        </Spin>
        <Pagination
          total={allCount}
          //
          current={nowPage}
          pageSize={pageSize}
          onChange={(page) => {
            // console.log('目标页数',page)
            //点击的新的页面的时候传入新的page
            this.getTable(page)
          }}
          className={styles.page}
        />

      </div>
    )
  }
}
export default GoodsList
