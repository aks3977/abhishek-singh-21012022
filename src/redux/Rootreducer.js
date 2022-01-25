import {combineReducers} from "redux";
import taskReducers from "./Reducer";

const rootReducer = combineReducers({
    tasks: taskReducers
})

export default rootReducer;