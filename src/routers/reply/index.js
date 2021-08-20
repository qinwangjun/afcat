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