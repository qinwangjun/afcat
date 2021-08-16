import { useDispatch } from "react-redux";
import { detailHttp } from "./config";

function useLoadReplies(){
  const dispatch = useDispatch();
  return async (articleId=2,page=1,limit=10)=>{
    const {data} = await detailHttp.get(`/replies?articleId=${articleId}&page=${page}&limit=${limit}`);
    dispatch({
      type: "REPLIES_LOAD",
      data: data.results
    })
  }
}

export {useLoadReplies};