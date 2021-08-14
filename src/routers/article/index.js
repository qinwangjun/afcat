import React, { Fragment, useState } from "react";
import { Row, Form, Input, Button, Select, DatePicker, Switch, message, Col } from "antd";
// import axios from "axios";
// import { useLocation } from "react-router";
import { http } from "../../store/action/config";
import cookie from 'react-cookies'
import withGuards from "../../component/guards";
import { useHistory } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;


function ArticlePage() {
  const [form] = Form.useForm();
  const {replace} = useHistory();
  const onFinish = (values) => {
    // const { token } = useLocation();
    console.log('submit:', values)
    const token = cookie.load('token');
    http.post('/article', values, {
      headers: {
        'Authorization': token,
      }
    })
      .then(function (res) {
        console.log("response: ", res);
        if(res.status == 200){
          message.success('发布成功！');
          replace("/?categoryId="+res.data.results.categoryId);
        }
      })
      .catch(err => message.error(err.response.data.message))
  };

  //重置
  const onReset = () => {
    form.resetFields();
  };
  //样式栅格
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 14,
    },
  };

  return (
    <div className="view">
      <div className="wrap">
        <div className="article">
          <Fragment>
            <Form
              form={form}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              layout="horizontal"
            >
              <Form.Item
                label="文章标题"
                name="title"
                rules={[{ required: true, message: "请输入文章标题！" }]}
              >
                <Input placeholder="请输入文章标题"/>
              </Form.Item>
              <Form.Item
                label="文章分类"
                name="categoryId"
                rules={[{ required: true, message: "请选择文章分类！" }]}
              >
                {/* 暂时写死，待优化，需从后台获取 */}
                <Select placeholder="请选择文章分类">
                  <Option value="1">问答</Option>
                  <Option value="2">招聘</Option>
                  <Option value="3">分享</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="内容"
                name="content"
                rules={[{ required: true, message: "请输入文章内容！" }]}
              >
                <TextArea rows={4} placeholder="请输入文章内容"/>
              </Form.Item>
              {/* <Form.Item name='create_at' label="发布时间">
            <DatePicker />
          </Form.Item>
          <Form.Item name='top' valuePropName="checked" label="是否置顶">
            <Switch />
          </Form.Item> */}
              <Form.Item {...tailLayout} >
                <Button type="primary" size='large' htmlType="submit" className='articleBubmitBtn'>
                  提交
            </Button>
                <Button htmlType="button" size='large' onClick={onReset}>
                  重置
            </Button>
              </Form.Item>
            </Form>

          </Fragment>
        </div>
      </div>
    </div>
  );
}

export default withGuards(ArticlePage);
