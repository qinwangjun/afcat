import { List,Avatar, Space, Skeleton  } from "antd";
import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadTopics } from "../../store/action/topics";
import { MessageOutlined, StarOutlined,UpCircleOutlined  } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";

function IndexList(props){
  const history = useHistory()
  const {categoryId,page} = props;
  const {loading,data} = useSelector(state=>state.topics);
  // const listData =data.articles
  console.log('data333=',data)
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const getData = useLoadTopics();
  useEffect(()=>{
    getData(page,categoryId);
  },[categoryId,page]);
  return <List
    loading={loading}
    className="index_list"
    dataSource={data}
    renderItem={item=>{
      return <List.Item
          key={item.id}
          actions={[
            <Link to={`/article/${item.id}`}  style={{color:'red'}}>
              <IconText icon={StarOutlined} text={item.viewCount} key="list-vertical-star-o" />
            </Link>,
            <Link to={`/article/${item.id}/${item.replyCount}`}>
              <IconText icon={MessageOutlined} text={item.replyCount} key="list-vertical-message" />
            </Link>
            // ,
            // <Link to={`/indexDetail/${item.id}/${item.top}`}  style={{color:'green'}}>
            //   <IconText icon={UpCircleOutlined} text={item.top= 1?'置顶':''} key="list-vertical-up-circle" />
            // </Link>
          ]}
        >    
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={ <Avatar src={item.avatar} /> }
                title={<Link to={`/article/${item.id}`}>{item.title}</Link>}            
              />
            </Skeleton>          
        </List.Item>       
    }}
  />
}

export default IndexList;