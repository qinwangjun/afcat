import { Pagination } from 'antd';
import { useHistory } from 'react-router';

function RepliesPagination(props){
	
    const{push} = useHistory();
    const {articleId,page,total=19,limit=10} = props;
    return <div className="index_page">
        <Pagination 
            current = {Number(page)}  
            total={total}
            pageSize={limit}
            onChange={(nextPage, pageNum)=>{
               // push(`/replies?articleId=${articleId}&page=${nextPage}`)
			    push(`/article/${articleId}?articleId=${articleId}&page=${nextPage}&limit=${pageNum}`)
            }}
        />
    </div>
}
export default RepliesPagination