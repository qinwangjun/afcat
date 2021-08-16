import { useDispatch } from "react-redux";

function Logout(){
  const dispatch = useDispatch();
  return <div className="Logout" onClick={()=>{
    dispatch({
      type:"GUARDS_PATH"
    });
  }}>退出登录</div>
}

export default Logout;