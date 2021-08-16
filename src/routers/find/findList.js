import { List} from "antd";


function Findlist(props){
    console.log(props.fs)
    let data = props.fs;
    console.log("111"+data)
    return <List 
        className="findList"
        dataSource={data}
        renderItem={item=>{
            return <List.Item>{item.title}</List.Item>
        }}
    />

}
export default Findlist;