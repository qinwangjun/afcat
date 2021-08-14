import { Pagination } from 'antd';
import { useHistory } from 'react-router';

function IndexPagination(props){
   // console.log(props)
    const{push} = useHistory();
    const {categoryId,page} = props;
    return <div className="index_page">
        <Pagination 
            current = {Number(page)}            
            total={500}
            pageSize={20}
            onShowSizeChange={false}
            onChange={(nextPage)=>{
                push(`/?categoryId=${categoryId}&page=${nextPage}`)
            }}
        />
    </div>
}
export default IndexPagination