import Nav from "../../component/nav";
import React,{ useEffect } from "react";
import {useLoadCategories} from '../../store/action/categories';
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";

function IndexNav(props) {
  const {categoryId,page} = props;
  const {data} = useSelector(state=>state.categories);
  const getData = useLoadCategories();
  useEffect(()=>{
    getData(categoryId);
  },[categoryId]);
  // console.log('ssss=',data)
  return <Nav
    data={data}
    getSelectedKey={() => {
      if(data){
        return data.findIndex(item => {
           let { categoryId: itemTab } = qs.parse(item.to.substr(2));          
           return categoryId === itemTab;
        })
      }else{
        alert('获取数据失败')
      }
      
    }}
    theme="light"
  />
}
export default IndexNav;