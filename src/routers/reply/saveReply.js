import { Form, Input, Button, message} from 'antd';
import { http } from "../../store/action/config";
import {useHistory,useLocation} from "react-router-dom";
import cookie from 'react-cookies'
import defaultAvatar from "../../static/imgs/peopledefault.png";

const { TextArea } = Input;

function SaveReply(props){
	//const token = cookie.load('token');
	const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA0MSwidXNlcm5hbWUiOiJxcTEyMyIsImlhdCI6MTYyODk0MzAyOH0.qKoK0Y8Q0em_9RxrsTeHDqz7Qy6wFICS-ggCbikB1Q8";
	const useName = cookie.load('userName');
	const imgSrc = cookie.load('avatar');
	const {articleId } = props;
	const [form] = Form.useForm();
	const {replace} = useHistory();
	const onFinish = (values) => {
		values.userId = 3280;
		values.articleId = articleId;
		values.reatedAt = parseInt((new Date().getTime() / 1000).toString());
		values.id= values.reatedAt*10000+parseInt(Math.random() *10000);
		http.post('/reply',values,{
			headers: {
			  'Authorization': token,
			}
		}).then(res => {
			if(res.status == 200){
				message.success('评论成功！');
				setTimeout(()=>{
					replace(`/article/${articleId}`);
				},2000);
			}
		}).catch(err => {
			message.error(err.response.data.message); 

		})

  };



  return (
    <div className="wrap_cent">
        <Form
          className="login-form_left"
          form={form}
          name="reply"
          onFinish={onFinish}
          scrollToFirstError
        >
		<Form.Item><h1>{'发表评论'}</h1></Form.Item>
          <Form.Item
            name="userId"
            label=""
          >
           <div className="user_avatar">
           	  <img src={imgSrc.split("http://10.24.24.64:9999/public/avatar/")[1] == '' ? defaultAvatar : imgSrc} ></img>
		        	<span className="login-form_left">{useName}</span>
           </div> 
          </Form.Item>

          <Form.Item
            name="content"
            label="回复内容"
            rules={[
              {
                required: true,
                message: '请输入评论内容',
              },
            ]}
          >
            <Input.TextArea  rows='4' placeholder="请输入文章内容" className='textArea_width'/>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              添加评论
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
export default SaveReply;