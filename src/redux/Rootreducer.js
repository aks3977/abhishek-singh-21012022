import {combineReducers} from "redux";
import taskReducers from "./Reducer";

const rootReducer = combineReducers({
    data: taskReducers
})

export default rootReducer;