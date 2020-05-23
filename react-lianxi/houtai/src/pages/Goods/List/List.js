import React, { Component, Fragment } from 'react'
import { Table, Pagination, Button ,Popconfirm, message,Drawer,Spin} from 'antd'
import { GetFoods, DelFood } from '@/api/goods'
import style from './list.module.less'
import UpDate from '../Update/Update'
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
        width: 100,
        ellipsis: true
      },
      {
        title: '描述',
        dataIndex: 'desc',
        width: 80
      },
      {
        title: '价格',
        dataIndex: 'price',
        width: 100
      },
      {
        title: '类别',
        dataIndex: 'foodType',
        width: 80
      },
      {
        title: '图片',
        dataIndex: 'img',
        width: 100,
        render:(data)=> {
          // console.log(data)
          return (
            <div>
              <img src={data} height='60' width='80' alt=''></img>
            </div>
            
          )
        }
      },
      {
        title: '操作',
        // fixed: 'right',
        width:100,
        // 箭头函数的this的指向
        render:(data) =>{
          return (
            <Fragment>
              {/* 提示的气泡框 */}
              <Popconfirm
                title="要删除本条数据吗?"
                onConfirm={()=>{
                  // console.log(this,data)
                  this.DelData(data._id)
                }}
                okText="是"
                cancelText="否"
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small'  onClick={()=>{
                  // console.log(data)
                this.setState({showDrawer:true,updateInfo:data})
                
              }}>修改</Button>
            </Fragment>

          )
        }
      },
    ]
    this.state = {
      nowPage: 1,//当前默认的页数
      allCount: 0,//数据的总条数
      dataSource: [],
      showDrawer:false,//抽屉
      updateInfo:{},// 更新之后的对象
      spaning:true
    }
  }
  componentDidMount() {
    this.getTableData(1)
  }
  // 根据id 删除数据
  DelData(id){
    DelFood(id)
    .then((res)=>{
      // console.log(res)
      message.success('删除成功',1)
      // 重新更新页面数据
      this.getTableData()
    })
  }
  // 更新页面数据
  getTableData(nowPage=1) {
    // console.log(nowPage)
    // 获取页面的网络请求
    GetFoods(nowPage, pageSize)
      .then((res) => {
        // 设置页面的数据 页面中的nowpage 
        this.setState({
          dataSource: res.list.foods, allCount: res.list.allCount,
          nowPage: nowPage,spaning:false
        })
      })
  }

  render() {
    let { dataSource, allCount, nowPage ,showDrawer,updateInfo,spaning} = this.state
    return (
      <div>
        <Spin className={style.spin} spinning={spaning} />
        <Table
          dataSource={dataSource}
          columns={this.columns}
          pagination={false}
          rowKey='_id'
          bordered={true}
          className={style.table}
        >
         </Table>
        <Pagination
          showQuickJumper
          // 当前页 每次显示的nowpage
          current={nowPage}
          total={allCount}
          pageSize={pageSize}
          onChange={(page) => {
            // console.log(page)
            this.getTableData(page)
          }}
          className={style.page}
        />
        <Drawer
          title="修改"
          placement="right"
          closable={true}
          onClose={()=>{
            this.setState({showDrawer:false})
          }}
          visible={showDrawer}
        >
          <UpDate 
          updateInfo={updateInfo}
          refreshList={()=>{
            this.setState({showDrawer:false})
            this.getTableData()
          }}
          ></UpDate>
        </Drawer>
      </div>
    )
  }
}
export default List