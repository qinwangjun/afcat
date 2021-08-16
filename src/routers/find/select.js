import { Input,Radio,message } from "antd";
import axios from "axios";

const { Search } = Input;
let s=null;
let radioValue='';
let url='http://39.99.151.246/api/user/articles';
function SelectPage(props){
    s = props.d;
    
    return <div className="searchBox">
        <Search
            style = {{width: 300}}
            placeholder="请输入用户名" 
            onSearch={onSearch}
            enterButton
        /> 
        <div>
            <Radio.Group  onChange={onChange}  defaultValue={1}>
                <Radio value={1}>所有文章</Radio>
                <Radio value={2}>话题文章</Radio>
            </Radio.Group>
        </div>
        </div>
       
}

function onSearch(value){
    // console.log(2)
    if(value == '' || value == null || value == undefined){
        message.info('请输入用户名',5);
        return;
    }
    axios({
        url:'http://39.99.151.246/api/user/profile',
        params:{
            value:value,
            type:1
        },
        method:'get'
    }).then(res=>{
        console.log("这个"+res.status);
        if(res.status === 200){
            console.log("这个1111"+res.data.results.id)
            selectAll(res.data.results.id);
        }else{
            message.info('请确认用户名是否正确',5); 
        }
    } ).catch(res=>{
        message.info('请确认用户名是否正确',5); 
        s('');
    })
}

function selectAll(value){
   console.log("1111 "+value)
   console.log("222 "+url)
    axios({
        url:url,
        params:{
            userId:value,
            page:1,
            limit:10
        },
        method:'get'
    }).then(res=>{
        if(res.data.results.articles == '' || res.data.results.articles == null || res.data.results.articles == undefined){
            message.info('用户没有发布过文章',5);
        }
        s(res.data.results.articles);
    }   
    ).catch(res=>{
        message.info('查询失败',5); 
        s('');
    })
}

function onChange(data){
    // console.log(1)
    radioValue = data.target.value;
    if(radioValue == '1')
    {
        url='http://39.99.151.246/api/user/articles';
    }else
    {
        url='http://39.99.151.246/api/user/replies';
    }
}
export default SelectPage;