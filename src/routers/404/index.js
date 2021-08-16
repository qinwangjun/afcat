import { Result, Button } from 'antd';
import {useHistory} from "react-router-dom";

function UndefinedPage(){
  const {replace} = useHistory();
  return <div className="view">
    <div className="wrap">
      <Result
        status="404"
        title="404"
        subTitle="对不起，页面不存在！"
        extra={<Button type="primary" onClick={()=>replace("/")}>返回首页</Button>}
      />
    </div>
  </div>
}
export default UndefinedPage;