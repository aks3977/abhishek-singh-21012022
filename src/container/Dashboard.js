import React from "react";
import Mainheader from "../H&F/Mainheader";
import Card from "../component/dashboard/Card";
import {useSelector, useDispatch} from "react-redux"; 
import { useEffect, useState } from "react/cjs/react.development";
import { loadTasks } from "../redux/Actions";


function Dashboard(props) {
  let {taskstest} = useSelector(state => state.data);
  const [backlog, setBacklog] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadTasks());
  },[])

  useEffect(()=>{
    if(taskstest){
      filterBacklog();
      filterTodo();
      filterInProgress();
      filterDone();
      console.log(backlog)
    }
  },[taskstest])

  const filterBacklog = () => {
    let x = taskstest.filter((a)=>{if(a.status=='Backlog'){return a}});
    setBacklog([...x]);
  }
  const filterTodo = () => {
    let x = taskstest.filter((a)=>{if(a.status=='To Do'){return a}});
    setToDo([...x]);
  }

  const filterInProgress = () => {
    let x = taskstest.filter((a)=>{if(a.status=='In Progress'){return a}});
    setInProgress([...x]);
  }

  const filterDone = () => {
    let x = taskstest.filter((a)=>{if(a.status=='Done'){return a}});
    setDone([...x]);
  }





  
  return (
    <>
      <Mainheader />
      <div className="container mt-5">
        <div className="row">
          <Card headerColor="bg-primary" footerColor="text-primary" icon="fa-list" name="All Tasks" count={taskstest.length} />
          <Card headerColor="bg-secondary" footerColor="text-secondary" icon="fa-snowflake" name="Backlogs" count={backlog.length} />
          <Card headerColor="bg-warning" footerColor="text-warning" icon="fa-book-reader" name="To-Do" count={toDo.length} />
          <Card headerColor="bg-danger" footerColor="text-danger" icon="fa-tasks" name="On Going" count={inProgress.length} />
        </div>
        <br />
        <br />
        <div className="row">
          <Card headerColor="bg-success" footerColor="text-success" icon="fa-check-double" name="Done" count={done.length}/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
