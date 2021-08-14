import axios from "axios";
import { useDispatch } from "react-redux";
// import { detailHttp } from "./config";

function useLoadDetail(){
  const dispatch = useDispatch();
  return async (id=1,viewCount=1,top=1)=>{
    // dispatch({
    //   type: "TOPICS_LOADING",
    // })
    // debugger
    // axios.get(`http://39.99.151.246/api/article?id=${id}&viewCont=${viewCount}`).then((res)=>{
    //   console.log(res);
    // });
    const {data} = await axios.get(`http://39.99.151.246/api/article/${id}/${viewCount}`);
    // const {data} = await detailHttp.get(`/article/${id}`);
    // http.get(`/article?id=${id}`).then((res)=>{
    //   console.log(res);
    // });
    //const {data} = await http.get(`/article?id=${id}&viewCount=${viewCount}&isTop=${top}`);
   //  console.log(data);
    dispatch({
      type: "DETAILS_LOAD",
      data: data.results
    })
  }
}

export  {useLoadDetail};
