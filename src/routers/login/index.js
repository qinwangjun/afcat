import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { http } from "../../store/action/config";
import cookie from 'react-cookies';

function LoginPage(){
  const dispatch = useDispatch();
  const {isLogin,prevPath} = useSelector(state=>state.guards);
  const {replace} = useHistory();
  // const getToken = cookie.load('token');
  // if(getToken){
    // console.log('isLog:',isLogin)
    // dispatch({
    //   type:"GUARDS_LOGIN"
    // });
    
    // isLogin = true;
  // }
  useEffect(()=>{
    if(isLogin){
      replace(prevPath ? prevPath : '/');  
    }
  },[isLogin])

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    http.post('/auth/login',values).then(res => {
      console.log('loginRes=',res)
      if(res.status == 200){
        message.success('登录成功！');
        let avatar = 'http://39.99.151.246'+res.data.results.avatar;
        dispatch({
          type:"GUARDS_LOGIN"
        });
        const token = res.headers.authorization;
        cookie.save('userName',res.data.results.username);
        cookie.save('avatar',avatar);
        // cookie.save('avatar','/static/imgs/peopledefault.png');
        cookie.save('token', token);
        console.log('avatar:',avatar)
      }
    })
    .catch(err => {
      // console.log(err.response.data);
      message.error(err.response.data.message);
    })
    
  };

  return <div className="view">
    <div className="wrap">
      <div className="regist_tips"><div className="reg_title">欢迎登录CNode</div><div>Node.js专业中文社区</div></div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={(values)=>{
        //   // dispatch({
        //   //   type:"GUARDS_LOGIN"
        //   // });
        //   onFinish(values);
        // }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
       

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}
export default LoginPage;