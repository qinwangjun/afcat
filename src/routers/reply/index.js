 import IndexList from "./repliesList";
import SaveReply from "./saveReply";
import { useLocation } from "react-router-dom";
import qs from "qs";


function ReplyPage(props){
	const {match} = props;
	const {params}= match;
	const {id,viewCount} = params;
	const {search} = useLocation();
	const {reply,articleId,page,limit} = qs.parse(search.slice(1));
	let articleKey = id != undefined ? id : articleId;
  if(reply == 'true'){
	 return <div className="view">
	 			<div className="wrap">
	 				<SaveReply
						articleId={articleKey}
					/>
	 			</div>
	 		</div>
  }else{
	 return <div className="view">
	  			<div className="wrap">
	  				<IndexList
	  				  articleId={articleKey}
	  				  page={page}
	  				  limit={limit}
	  				/>
	  			</div>
	  		</div>
  }
  
}
export default ReplyPage;

















/* import { Link } from "react-router-dom";
function ReplyPage(){
	
  return <div className="panel">
			<div className="header">
			  <span className="col_fade">19 回复</span>
			</div>
			<div className="cell reply_area reply_item">
			  <div className="author_content">
				<a href="" className="user_avatar">
					<img src={'https://avatars.githubusercontent.com/u/33950951?v=4&s=120'} title="ganshiqingyuan"></img>
				</a>
				<div className="user_info">
				  <a className="dark reply_author" href="">ganshiqingyuan</a>
				  <a className="reply_time" href="#60e2b5ccba746077e8862469">1楼•1 个月前</a>
				</div>
				<div className="user_action">
				  <span>
					<i className="fa up_btn fa-thumbs-o-up" title="喜欢"></i>
					<span className="up-count">2</span>
				  </span>
				  <span>
				  </span>
				</div>
			  </div>
			  <div className="reply_content from-ganshiqingyuan">
				<div className="markdown-text"><p>多啊，支持ts最好的框架，你说呢</p>
				</div>
			  </div>
			  <div className="clearfix">
				<div className="reply2_area">
				  
				</div>
			  </div>
			</div>
		</div>
}
export default ReplyPage; */