import { Input,Radio } from "antd";
import axios from "axios";

const { Search } = Input;
let s=null;
let radioValue='';
function SelectPage(props){
    s = props.d;
    
    return <div >
        <tr><Search
            style = {{width: 300}}
            placeholder="请输入作者名称" 
            onSearch={onSearch}
            enterButton
        /></tr> 
        <tr>
            <Radio.Group  onChange={onChange}  defaultValue={1}>
                <Radio value={1}>所有文章</Radio>
                <Radio value={2}>话题文章</Radio>
            </Radio.Group>
        </tr>
        </div>
       
}

function onSearch(value){
    // console.log(2)
    axios({
        url:'http://39.99.151.246/api/user/profile',
        params:{
            value:value,
            type:1
        },
        method:'get'
    }).then(function (response) {
        // console.log(response.data.results.id);
        selectAll(response.data.results.id);
    }   
    ).catch(
        err => console.error(err)
    )
}

function selectAll(value){
    axios({
        url:'http://39.99.151.246/api/user/articles',
        params:{
            userId:value,
            page:1,
            limit:10
        },
        method:'get'
    }).then(function (response) {
        s(response.data.results.articles);
    }   
    ).catch(
        err => console.error(err)
    )
}

function onChange(data){
    // console.log(1)
    radioValue = data.target.value;
}
export default SelectPage;