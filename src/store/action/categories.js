import { useDispatch } from "react-redux";
import { http } from "./config";
// import { useEffect } from "react";

function useLoadCategories(){
  const dispatch = useDispatch();
  return async ()=>{
    // const {data} = await http.get(`/categories?page=${page}&tab=${tab}&limit=${limit}`);
    const {data} = await http.get('/categories')
    console.log('categoryData=',data);
    let indexNavs = [];
    let list = data.results;
    if(list.length > 0){
      indexNavs.push({
        to: "/?categoryId=all",
        title: "全部"
      });
      for(let i in list){
        indexNavs.push({
          to: "/?categoryId="+list[i].id,
          title: list[i].name
        })
      }
    }
    dispatch({
      type: "CATES_LOAD",
      data: indexNavs
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

export {useLoadCategories};