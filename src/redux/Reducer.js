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
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default taskReducers;