import { List, Button ,Comment} from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadReplies } from "../../store/action/replies";
import {useHistory} from "react-router-dom";
import RepliesPagination from "./repliesPagination";
import defaultAvatar from "../../static/imgs/peopledefault.png";
import withGuards from "../../component/guards";

function IndexList(props){
  const {articleId,page,limit} = props;
  const {replace} = useHistory();
  const {loading,data} = useSelector(state=>state.replies);
  // const {loading,data} = useSelector(state=>state.topics);
  const getData = useLoadReplies();
  useEffect(()=>{
    getData(articleId,page,limit);
  },[articleId,page,limit]);
 
	let list = data.replies || [];
	let baseNum = isNaN((Number(page)-1)*Number(limit)) ? 0 :(Number(page)-1)*Number(limit);
	console.log('list===',list)
	const dateCalculation = (dateValue) => {
		var date = new Date().getTime();
		let num = new Date().getTime() - dateValue;
		let days = parseInt(num / (1000 * 60 * 60 * 24));
		if(days < 1){
			return '刚刚';
		}else if(days < 30){
			return days+'天前';
		}else if(days < 365){
			return (days-days%30)/30+'个月前';
		}else{
			return (days-days%365)/365+'年前';
		}
	};
  return <>
		<div className="panel">
  			<div className="header">
  			  {/* <span className="col_fade_left" >共有{data.count+'评论'}</span> */}
			  <Button className="col_fade_right" type="primary" htmlType="submit" onClick={()=>{
				 replace(`/replies?reply=true&articleId=${articleId}`);
			  }}>添加评论</Button>
  			</div>
			  <div>
			  <List
					className="comment-list"
					header={`共有 ${list.length} 条评论`}
					itemLayout="horizontal"
					dataSource={list}
					renderItem={(item,index )=> (
					<li>
						<Comment
						//actions={item.actions}
						author={item.username}
						avatar={(item.avatar == null || item.avatar == '' || item.avatar.indexOf("upload_") > -1) ? defaultAvatar : item.avatar}
						content={item.content}
						datetime={(index+1+baseNum)+'楼  ' + dateCalculation(item.createdAt)}
						/>
					</li>
					)}
				/>
			  </div>

		<RepliesPagination
		  articleId={articleId}
		  page={page}
		  limit={limit}
		  total={data.count}
		/>
		</div>
	</>
}

export default withGuards(IndexList);