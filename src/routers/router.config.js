import IndexPage from "./index/index";
import UndefinedPage from "./404/index";
import ArticlePage from './article/index';
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
    render(props){
      return <IndexPage {...props}/>
    }
  }
  ,{
    path:"/article/:id",
    render(props){
	  return <ArticleReply {...props}/>
    }
  },{
    path:"/article",
    exact: true,
    render(props){
      return <ArticlePage {...props}/>
    }
  },{
    path:"/regist",
    exact: true,
    render(props){
      return <RegistPage {...props}/>
    }
  },{
    path:"/login",
    exact: true,
    render(props){
      return <LoginPage {...props}/>
    }
  },{
    path:"/FindPage",
    exact: true,
    render(props){
      return <FindPage {...props}/>
    }
  },{
    path:"/Head",
    exact: true,
    render(props){
      return <Head {...props}/>
    }
  },{
	path:"/replies",
	exact: true,
	render(props){
		return <ReplyPage {...props}/>
	}
  },{
    path:"",
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
  {
    to: "/regist",
    title: "注册"
  },{
    to: "/login",
    title: "登录"
  }
];

export {router_list,navs};