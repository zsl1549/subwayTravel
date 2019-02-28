import React from 'react'
import { Carousel, Table, Button, Input, Row, Col, Modal, Form } from 'antd'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import ConfirmModal from "../ConfirmModal"
const Search = Input.Search;
const FormItem = Form.Item;//表单
const { TextArea } = Input;//搜索框



@withRouter @inject('appStore') @observer @Form.create()
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      deleteVar:null

    }
  };

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }

    })
  }
  handleCancel = () => {
    this.setState({ isVisible: false })
  }

  handleAdd = () => {
    this.setState({ isVisible: true })
  }

  handleDeleteVar = () => {
    this.setState({ deleteVar: null });
  }

  onDeleteVar = () => {
    this.setState({ deleteVar: true });
  }
  cancelDeleteVar = () => {
    this.setState({ deleteVar: null });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { isVisible,deleteVar } = this.state;
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      id: 1,
      time: "2009-12-1",
      rizhi: "daaafdasf"

    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      id: 2,
      time: "2009-12-1",
      rizhi: "daaafdasf"

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
      render: (val, data) => {
        return <div>
          <a
            onClick={() => {
            }}
            style={{ marginRight: "5px" }}
            href="javascript:;">点击查询</a>
        </div>
      }
    }, {
      title: '操作',
      dataIndex: 'caozuo',
      key: 'caozuo',
      render: (val, data) => {
        return <div>
          <a
            onClick={() => {
              this.handleAdd()
            }}
            style={{ marginRight: "5px" }}
            href="javascript:;">修改</a>
          <a
            onClick={() => {
              this.onDeleteVar()
            }}
            href="javascript:;">删除</a>
        </div>
      }
    }];

    return (
      <div style={styles.bg} className='home'>
        <div style={{ margin: "10px" }}>
          {deleteVar&&<ConfirmModal
            onOk={this.handleDeleteVar}
            onCancel={this.cancelDeleteVar}
            title="删除"
            desc="确定要删除吗？"
            subDesc="此操作不可恢复"
          />}
          <Row style={{ marginBottom: "10px" }}>
            <Col span={8}>
              <Search
                placeholder="请输入用户名"
                onSearch={value => console.log(value)}
                enterButton
              />
            </Col>
            <Col span={15} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={() => { this.handleAdd() }}>添加用户</Button>
            </Col>
          </Row>
          <Table style={{ background: "#fff" }} dataSource={dataSource} columns={columns} />


          <Modal
            title={"添加用户"}
            visible={isVisible}
            onOk={this.handleSubmit}//确认按钮
            onCancel={() => { this.handleCancel() }}//取消按钮
          >
            <div className="t-rows configManagement">
              <Form
                onSubmit={this.handleSubmit}>
                <FormItem
                  labelCol={{ span: 4, offset: 0 }}
                  wrapperCol={{ span: 20, offset: 0 }}
                  style={{ marginBottom: '10px' }}
                  label='用户名ID'
                  required
                >
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder='请输入名称' maxLength='10' />
                  )}
                </FormItem>
                <FormItem
                  labelCol={{ span: 4, offset: 0 }}
                  wrapperCol={{ span: 20, offset: 0 }}
                  style={{ marginBottom: '10px' }}
                  label='用户名'
                  required
                >
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入上传人' }],
                  })(
                    <Input placeholder='请输入上传人' maxLength='10' disabled={true} />
                  )}
                </FormItem>
                <FormItem
                  labelCol={{ span: 4, offset: 0 }}
                  wrapperCol={{ span: 20, offset: 0 }}
                  style={{ marginBottom: '10px' }}
                  label='注册时间'
                  required
                >
                  {getFieldDecorator('deptName', {
                    rules: [{ required: true, message: '请输入上传单位' }],
                  })(
                    <Input placeholder='请输入上传单位' maxLength='10' disabled={true} />
                  )}
                </FormItem>
                <FormItem
                  labelCol={{ span: 4, offset: 0 }}
                  wrapperCol={{ span: 20, offset: 0 }}
                  style={{ marginBottom: '10px' }}
                  label='查询日志'
                  required
                >
                  {getFieldDecorator('resourceDeptName', {
                    rules: [{ required: true, message: '请输入所属单位' }],
                  })(
                    <Input placeholder='请输入所属单位' maxLength='10' disabled={true} />
                  )}
                </FormItem>
              </Form>
            </div>
          </Modal>
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