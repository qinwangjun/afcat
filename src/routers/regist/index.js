import { Form, Input, Button, message } from 'antd';
import { http } from "../../store/action/config";
import {useHistory} from "react-router-dom";


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegistPage(){
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  // const {data} = useSelector(state=>state.regist);
  const {replace} = useHistory();
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    http.post('/auth/register',values).then(res => {
      console.log('regRes=',res)
      if(res.status == 200){
        message.success('注册成功！');
        setTimeout(()=>{
          replace("/login");
        },2000);
      }
    })
    .catch(err => {
      // console.log(err.response.data);
      message.error(err.response.data.message);
    })


      
    
    
    

  };



  return (
    <div className="view">
      <div className="wrap">
        <Form
          className="registBox"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <div className="regist_tips"><div className="reg_title">CNode</div><div>Node.js专业中文社区</div></div>
          <Form.Item
            name="username"
            label="用&nbsp;&nbsp;户&nbsp;&nbsp;名"
            rules={[
              {
                required: true,
                message: '请设置用户名',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="登录密码"
            rules={[
              {
                required: true,
                message: '请输入登录密码',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="repassword"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次输入登录密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default RegistPage;