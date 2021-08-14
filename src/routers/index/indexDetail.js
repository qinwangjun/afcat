import axios  from "axios";
import {useSelector } from "react-redux";
import React,{ useEffect } from "react";
import { useLoadDetail } from "../../store/action/detail";
function IndexListDetail(props){
    //console.log(props)
    const {match} = props;
    const {params}= match;
    const {id,viewCount} = params;
    const {loading,data} = useSelector(state=>state.detail);
    const getData = useLoadDetail();
    useEffect(()=>{
        getData(id,viewCount);
    },[id,viewCount]);

    return <>
    { data? <div className='detial'>
                <h2 className='detil_head'>{data.title}</h2>
                <div className='detial_tag'>
                    <span>作者：{data.username}</span>
                    <span>发布时间：{data.createdAt}</span>
                    <span>评论：{data.replyCount}</span>
                    <span>访问：{data.viewCount}</span>
                    {/* <span>置顶：{data.isTop}</span> */}
                </div>
                <hr></hr>
                <div className='detial_content' dangerouslySetInnerHTML = {{ __html: data.content }} />
                <hr></hr>               
            </div>: <div className='detial'><div className='empty'>没有数据展示！</div></div>}
            
            
    </>
}
export default IndexListDetail