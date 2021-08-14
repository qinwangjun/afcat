import {combineReducers,createStore} from "redux";
import topics from "./reducer/topics";
import detail from "./reducer/detail";
import categories from "./reducer/categories";
import guards from "./reducer/guards";
export default createStore(combineReducers({topics,categories,guards,detail}));