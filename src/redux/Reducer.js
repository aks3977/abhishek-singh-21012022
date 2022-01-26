import * as types from "./ActionTypes";

const initialState = {
    taskstest: [],
    task: {},
    loading: true
}

const taskReducers = (state= initialState, action) => {
    switch(action.type) {
        case types.GET_TASKS:
            return{
                ...state,
                taskstest:action.payload,
                loading: false
            }
        case types.DELETE_TASK:
        case types.ADD_TASK:
        case types.UPDATE_TASK:
            return{
                ...state,
                loading:false
            }
        case types.GET_SINGLE_TASK:
            return{
                ...state,
                task: action.payload,
                loading:false
                }
    
        default:
            return state;
    }
}

export default taskReducers;