import Findlist from "./findList";
import SelectPage from "./select";
import {useState} from 'react';

function FindPage(props){
  const [a,setA] = useState();
  const s = (data)=>{
    console.log("-------"+data)
    setA(data);
  }
    return <div align="center" className="view">
      <div  className="wrap">
        <h1 >个人文章搜索</h1>
        <SelectPage d={s} />
        <Findlist fs={a}  />
      </div>
    </div>
  }
  export default FindPage;