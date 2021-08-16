import {Layout, Affix, Col, Row} from "antd";
import { Link } from "react-router-dom";
import Nav from "./nav";
// import Drop from "./dropdowns";
import { navs } from "../routers/router.config";
import { Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import cookie from 'react-cookies'
import { useSelector } from "react-redux";
const content = (
  <div>
    <div className="upLoadAvatar"><Link to="/head">上传头像</Link></div>
    {/* <div className="Logout"><Link to="/">退出登录</Link></div> */}
  </div>
);
let avatar = '';
let userName = '';
// let isLogin = false;
function Header(){
  const {isLogin} = useSelector(state=>state.guards);
  // const getToken = cookie.load('token');
  if(isLogin){
    avatar = cookie.load('avatar');
    userName = cookie.load('userName');
    console.log(avatar,userName)
  }
  // if(cookie.load('userName') && cookie.load('avatar')){
  //   isLogin = true;
  //   avatar = cookie.load('avatar');
  //   userName = cookie.load('userName');
  //   console.log('isLogin!')
  //   console.log(avatar,userName)
  // }
  
  return <Affix offsetTop={0}>
    <Layout.Header>
      <div className="header_flex">
        <h1 id="logo">
          <Link to="/">CNode</Link>
        </h1>
        <div className="header_right">
          <div>
            <Nav
              data={navs}
              getSelectedKey={({pathname})=>{
                return navs.findIndex(items=>items.to === pathname)
              }}
              theme="dark"
            />
          </div>
          <div className="userInfo">
            {isLogin ? <Popover placement="bottom" content={content} title="">
              <Link to="/">
                <img className="avatar" src={avatar} title=""/>
                <span className="userName">
                  {userName} <DownOutlined />
                </span>
              </Link>
            </Popover> : ``}
          </div>
        </div>
      </div>
    </Layout.Header>
  </Affix>
}

export default Header;