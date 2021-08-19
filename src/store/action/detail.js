import { useDispatch } from "react-redux";
import { detailHttp } from "./config";

function useLoadDetail(){
  const dispatch = useDispatch();
  return async (id=1)=>{
    dispatch({
      type: "DETAIL_LOADING",
    })
   const {data} = await detailHttp.get(`/article/${id}`);
    console.log(data)
    dispatch({
      type: "DETAIL_LOAD",
      data: data.results
    })
  }
}

export  {useLoadDetail};
