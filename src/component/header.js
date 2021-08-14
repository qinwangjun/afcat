import {Layout, Affix, Col, Row} from "antd";
import { Link } from "react-router-dom";
import Nav from "./nav";
// import Drop from "./dropdowns";
import { navs } from "../routers/router.config";
import { Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const content = (
  <div>
    <div className="upLoadAvatar"><Link to="/setting">上传头像</Link></div>
    <div className="Logout"><Link to="/">退出登录</Link></div>
  </div>
);
function Header(){
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
            <Popover placement="bottom" content={content} title="">
              <Link to="/">
                <img className="avatar" src="https://avatars.githubusercontent.com/u/35025215?v=4&s=120" title=""/>
                <span className="userName">
                  张三 <DownOutlined />
                </span>
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </Layout.Header>
  </Affix>
}

export default Header;