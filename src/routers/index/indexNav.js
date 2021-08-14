import Nav from "../../component/nav";
import React,{ useEffect } from "react";
import {useLoadCategories} from '../../store/action/categories';
import { useDispatch, useSelector } from "react-redux";

import qs from "qs";

// const indexNavs = [
//   {
//     to: "/?categoryId=all",
//     title: "全部"
//   }, {
//     to: "/?categoryId=1",
//     title: "问答"
//   }, {
//     to: "/?categoryId=2",
//     title: "招聘"
//   }, {
//     to: "/?categoryId=3",
//     title: "分享"
//   },
// ];
// const indexNavs = [
//   {
//     to: "/?tab=all",
//     title: "全部"
//   }, {
//     to: "/?tab=good",
//     title: "精华"
//   }, {
//     to: "/?tab=share",
//     title: "分享"
//   }, {
//     to: "/?tab=ask",
//     title: "问答"
//   },
// ];
function IndexNav(props) {
  const {categoryId,page} = props;
  const {data} = useSelector(state=>state.categories);
  const getData = useLoadCategories();
  useEffect(()=>{
    getData(categoryId);
  },[categoryId]);
  console.log('ssss=',data)
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
// function IndexNav(){
//   const {search} = useLocation();
//   const getSelectedKey = ()=>{
//     const {tab="all"} = qs.parse(search.substr(1));
//     return indexNavs.findIndex(item=>{
//       let {tab:itemTab} = qs.parse(item.to.substr(2));
//       console.log(tab,itemTab);
//       return tab === itemTab;
//     })
//   }
//   const selectedKey = getSelectedKey();
//   console.log(selectedKey)
//   return <Menu 
//     mode="horizontal"
//     theme="light"
//     selectedKeys={[selectedKey+""]}
//   >
//     {
//       indexNavs.map((item,index)=>{
//         return <Menu.Item key={index}>
//           <Link to={item.to}>{item.title}</Link>
//         </Menu.Item>
//       })
//     }
//   </Menu>
// }
export default IndexNav;