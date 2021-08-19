import { useLocation } from "react-router-dom";
import IndexListDetail from "./indexDetail";
import ReplyPage from "../reply/index";
import qs from "qs";

function ArticleReply(props){
  const {search} = useLocation();
  const {categoryId="all",page="1"} = qs.parse(search.slice(1));
  return <div className="detial">
	  		
			  <IndexListDetail {...props}/>
			
			  <div className='reply_titile'>
			<ReplyPage {...props}/>
			</div>
		</div>
}
export default ArticleReply;