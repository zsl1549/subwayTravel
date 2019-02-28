import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import "./index.css"
import {
    Form,
    Modal,
    Input,
    Button,
    TimePicker,
    Select,
    Row,
    Col,
} from 'antd';
const Option = Select.Option;//下拉框
const FormItem = Form.Item;//表单
const format = 'HH:mm';

class Index extends Component {
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
                <h1>地铁出行预测</h1>
                <Form
                    onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label='地铁站'
                            >
                                {getFieldDecorator('groupId', {
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={this.handleChange}
                                        onFocus={this.handleFocus}
                                        onBlur={this.handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='出发时间'
                            >
                                {getFieldDecorator('time', {
                                    initialValue:moment('12:08', format)
                                })(
                                    <TimePicker 
                                    style={{width:200}} 
                                    onChange={this.handleChange	}	format={format} />,
                                )}
                            </FormItem>
                </Form>
                <Button type="primary"><Link to="/queryResults">查询</Link></Button>
                <div>&nbsp;</div>
                <Button type="primary"><Link to="/login">管理后台</Link></Button>
            </div>
        );
    }
}
Index = Form.create({})(Index);

export default Index;
