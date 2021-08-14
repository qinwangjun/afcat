import IndexNav from "./indexNav";
import IndexList from "./indexList";
import { useLocation } from "react-router-dom";
import IndexPagination from "./IndexPagination";
import qs from "qs";
function IndexPage(){
  const {search} = useLocation();
  const {categoryId="all",page="1"} = qs.parse(search.slice(1));
  return <div className="view">
    <div className="wrap">
      <IndexNav 
        categoryId={categoryId}
      />
      <IndexList 
        categoryId={categoryId}
        page={page}
      />
      <IndexPagination
        categoryId={categoryId}
        page={page}
      />
    </div>
  </div>
}
export default IndexPage;