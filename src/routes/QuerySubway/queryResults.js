import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    Modal,
    Input,
    Button,
    TimePicker,
    Select,
    Row,
    Icon,
    Col,
} from 'antd';
const Option = Select.Option;//下拉框
const FormItem = Form.Item;//表单
const format = 'HH:mm';

class queryResults extends Component {
    constructor(props) {
        super(props);
    };
    handleSubmit = () => {

    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 }
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 }
            }
          };
        return (
            <div className="App-cen">
                <h1 style={{color:"#1890ff"}}> <Icon style={{color:"#1890ff"}} type="left" /> <Link to="/querySubway">返回</Link>
                17:30 林萃桥
                </h1>
                <Form
                    onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label='预测结果'
                            >
                                <div style={{color:"red",fontSize:"30px"}}>限流</div>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='建议出行时间'
                            >
                               <div style={{color:"#1890ff"}}>15:30</div>
                            </FormItem>
                </Form>
               
            </div>
        );
    }
}
queryResults = Form.create({})(queryResults);
//  Index = Form.create()(Index);

export default queryResults;
