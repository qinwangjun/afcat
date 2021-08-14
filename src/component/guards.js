const { useDispatch, useSelector } = require("react-redux");
const { useLocation, Redirect } = require("react-router-dom");

function Guards(props){
  const {Cmp,parentProps} = props;
  const {isLogin} = useSelector(state=>state.guards);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  if(isLogin){
    return <Cmp {...parentProps}/>
  }
  
  dispatch({
    type: "GUARDS_PATH",
    path: pathname
  });
  return <Redirect to="/login" />
}
function withGuards(Cmp){
  return (props)=>{
    return <Guards
      parentProps = {props}
      Cmp = {Cmp}
    />
  }
}
export default withGuards;