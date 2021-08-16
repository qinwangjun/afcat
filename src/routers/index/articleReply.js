import { useLocation } from "react-router-dom";
import IndexListDetail from "./indexDetail";
import ReplyPage from "../reply/index";
import qs from "qs";

function ArticleReply(props){
	//console.log(props);
  const {search} = useLocation();
  const {categoryId="all",page="1"} = qs.parse(search.slice(1));
  return <div className="view">
			<IndexListDetail {...props}/>
			<ReplyPage {...props}/>
		</div>
}
export default ArticleReply;