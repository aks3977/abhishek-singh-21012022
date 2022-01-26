// import "../styles/statusLine.scss";
import Task from "./Task";
import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { loadTasks } from "../../redux/Actions";




export default function StatusLine(props) {
  const { status, backgroundColor, icon, tasks, deleteTask, addEmptyTask, addTask } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadTasks())
  },[])


  // const [tasks, setTasks] = useState([]);


  let taskList, tasksForStatus;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          // moveTask={(id, status) => moveTask(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }
  console.log(tasksForStatus && tasksForStatus,"tasksForStatus");


  return (
    <div className={`statusLine ${backgroundColor}`}>
      <h3 className="status_name text-center display-4">
      <i class={`fas ${icon}`} style={{marginRight:"0.5rem"}}></i> 
             {status}
        </h3>
      {taskList}
      {status==="Backlog" &&
      <div className="text-center pb-2">
      <i class="fa fa-plus-circle fa-3x text-light"
       onClick={()=>history.push("/addtask")}
      ></i>
      {/* // <button onClick={handleAddEmpty} className="button addTask">
      //   +
      // </button> */}
      </div>
      }
    </div>
  );
}
