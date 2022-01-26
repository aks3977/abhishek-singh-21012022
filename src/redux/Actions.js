import axios from "axios";
import * as types from "./ActionTypes";

const getTasks = (tasks) => ({
    type: types.GET_TASKS,
    payload: tasks
})

const taskDeleted = () => ({
    type: types.DELETE_TASK
})  

const taskAdded = () => ({
    type: types.ADD_TASK
})


export const loadTasks = () => {
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((resp)=>{
            console.log("response",resp)
            dispatch(getTasks(resp.data))
        }).catch((error)=>console.log(error));
    }
}

export const deleteTask = (id) => {
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("response",resp)
            dispatch(taskDeleted());
            dispatch(loadTasks);
        }).catch((error)=>console.log(error));
    }
}

export const addTask = (task) => {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`, task)
        .then((resp)=>{
            console.log("response",resp)
            dispatch(taskAdded());
            // dispatch(loadTasks);
        }).catch((error)=>console.log(error));
    }
}