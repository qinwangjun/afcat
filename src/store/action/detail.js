import axios from "axios";
import { useDispatch } from "react-redux";
import { http } from "./config";
import { detailHttp } from "./config";

function useLoadDetail(){
  const dispatch = useDispatch();
  return async (id=1)=>{
    dispatch({
      type: "DETAIL_LOADING",
    })
   
   //let getData = axios.get(`http://39.99.151.246/api/article/${id}`).then((res)=>{  

   // });
   const {data} = await detailHttp.get(`/article/${id}`);
    console.log(data)
    dispatch({
      type: "DETAIL_LOAD",
      data: data.results
    })
  }
}

export  {useLoadDetail};
