import {Layout, Affix, Col, Row} from "antd";
import { Link } from "react-router-dom";
import Nav from "./nav";
import { navs } from "../routers/router.config";
import { Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import defaultAvatar from "../static/imgs/peopledefault.png";
import cookie from 'react-cookies';

const content = (
  <div>
    <div className="upLoadAvatar"><Link to="/head">上传头像</Link></div>
    <div className="Logout"><Link to="/" onClick={()=>{
      cookie.remove('token');
      cookie.remove('avatar');
      cookie.remove('userName');
      window.history.go(0);
    }}>退出登录</Link></div>
  </div>
);

function Header(){
  const {isLogin} = useSelector(state=>state.guards);
  const {avatar,userName} = useSelector(state=>state.user);
  // console.log('avatar:',avatar)
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
                <img className="avatar" src={(avatar.split('http://10.24.24.64:9999/public/avatar/')[1] == '' || avatar.split('http://10.24.24.64:9999')[1] == '') ? defaultAvatar : avatar} title=""/>
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