import React from 'react'
import { Carousel, Table, Button, Input, Row, Col } from 'antd'
const Search = Input.Search;

class Index extends React.Component {
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      id:1,
      time:"2009-12-1",
      rizhi:"daaafdasf"

    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      id:2,
      time:"2009-12-1",
      rizhi:"daaafdasf"

    }];

    const columns = [{
      title: '用户名ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '注册时间',
      dataIndex: 'time',
      key: 'time',
    }, {
      title: '查询日志',
      dataIndex: 'rizhi',
      key: 'rizhi',
    }, {
      title: '操作',
      dataIndex: 'caozuo',
      key: 'caozuo',
      render: (val, data) => {
        return <div>
          <a
          style={{marginRight:"5px"}}
          onClick={() => {
          }}
          href="javascript:;">修改</a>
          <a
          onClick={() => {
          }}
          href="javascript:;">删除</a>
        </div>
      }
    }];

    return (
      <div style={styles.bg} className='home'>
      <div style={{margin:"10px"}}>

        <Row style={{marginBottom:"10px"}}>
          <Col span={8}>
            <Search
              placeholder="请输入用户名"
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>
          <Col span={15} style={{textAlign:"right"}}>
            <Button type="primary">添加用户</Button>
          </Col>
        </Row>
        <Table style={{background:"#fff"}} dataSource={dataSource} columns={columns} />
      </div>

      </div>
    )
  }
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)'
  }
}

export default Index