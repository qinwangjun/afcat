import { useDispatch } from "react-redux";
import { http } from "./config";
// import { useEffect } from "react";

function useLoadTopics(){
  const dispatch = useDispatch();
  return async (page=1,categoryId='all',top=0,limit=20)=>{
    // const {data} = await http.get(`/topics?page=${page}&tab=${tab}&limit=${limit}`);
    const {data} = await http.get(`/articles?page=${page}&categoryId=${categoryId}&top=${top}&limit=${limit}`)
    // console.log(data);
    dispatch({
      type: "TOPICS_LOAD",
      data: data.results.articles
    })
  }
}

// function useLoadTopics(){
//   const dispatch = useDispatch();
//   const getData = async (page=1,tab="all",limit=20)=>{
//     const {data} = await http.get('/topics?page=${page}$tab=${tab}$limit=${limit}'); 
//     dispatch({
//       type: "TOPICS_LOAD",
//       data: data.data
//     })
//   }
//   useEffect(()=>{
//     getData();
//   },[]);    
// }

export {useLoadTopics};