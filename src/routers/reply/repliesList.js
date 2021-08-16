import { List, Button } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadReplies } from "../../store/action/replies";
import {useHistory} from "react-router-dom";
import RepliesPagination from "./repliesPagination";

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
  			  <span className="col_fade_left" >{data.count+'评论'}</span>
			  <Button className="col_fade_right" type="primary" htmlType="submit" onClick={()=>{
				 replace(`/replies?reply=true&articleId=${articleId}`);
			  }}>添加评论</Button>
  			</div>
			{
				list.map((item, index)=>{
					return (<div className="cell reply_area reply_item" key={item.id}>
								<div className="author_content">
									<div className="user_avatar">
										<img src={item.avatar} ></img>
									</div>
									<div className="user_info">
									  <span>{item.username} </span>
									  <span>{(index+1+baseNum)+'楼'+dateCalculation(item.createdAt)}</span>
									</div>
								</div>
								<div className="reply_content">
									<div className="markdown-text">
										<p>{item.content}</p>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>)
				})
			}
  		</div>
		<RepliesPagination
		  articleId={articleId}
		  page={page}
		  limit={limit}
		  total={data.count}
		/>
	</>
  
 /* return <List
    loading={loading}
    className="index_list"
    dataSource={indexNavs}
    renderItem={item=>{
      return <List.Item>{item.content}</List.Item>
	  
    }}
  /> */
}

export default IndexList;