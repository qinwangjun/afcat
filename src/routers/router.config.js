import IndexPage from "./index/index";
import IndexListDetail from './index/indexDetail';
import ArticlePage from './article/index';
import UndefinedPage from "./404/index";
import SettingPage from "./setting/index";
import RegistPage from "./regist/index";
import LoginPage from "./login/index";
import FindPage from "./find/index";
import Head from "./head/head";
import ReplyPage from "./reply/index";
import ArticleReply from "./index/articleReply";
const router_list = [
  {
    path:"/",
    exact: true,
    isLogin: false,
    render(props){
      return <IndexPage {...props}/>
    }
  }
  ,{
    path:"/article/:id",
    render(props){
       //return <IndexListDetail {...props}/>
	  return <ArticleReply {...props}/>
    }
  },{
    path:"/article",
    exact: true,
    render(props){
      return <ArticlePage {...props}/>
    }
  },{
    path:"/setting",
    exact: true,
    isLogin: true,
    render(props){
      return <SettingPage {...props}/>
    }
  },{
    path:"/regist",
    exact: true,
    isLogin: false,
    render(props){
      return <RegistPage {...props}/>
    }
  },{
    path:"/login",
    exact: true,
    isLogin: false,
    render(props){
      return <LoginPage {...props}/>
    }
  },{
    path:"/FindPage",
    exact: true,
    isLogin: false,
    render(props){
      return <FindPage {...props}/>
    }
  },{
    path:"/Head",
    exact: true,
    isLogin: false,
    render(props){
      return <Head {...props}/>
    }
  },{
	path:"/replies",
	exact: true,
	isLogin: false,
	render(props){
		return <ReplyPage {...props}/>
	}
  },{
    path:"",
    isLogin: false,
    render(props){
      return <UndefinedPage {...props}/>
    }
  }
];

const navs = [
  {
    to: "/",
    title: "首页"
  },{
    to: "/article",
    title: "发布文章"
  },{
    to: "/FindPage",
    title: "文章搜索"
  },
  // {
  //   to: "/setting",
  //   title: "设置"
  // },
  {
    to: "/regist",
    title: "注册"
  },{
    to: "/login",
    title: "登录"
  }
  // ,{
  //   to: "/head",
  //   title: "头像上传"
  // },
];

export {router_list,navs};