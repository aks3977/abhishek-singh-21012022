import React,{useEffect, useState} from 'react';
import StatusLine from '../component/taskmanagement/StatusLine';
import Mainheader from '../H&F/Mainheader';
import {useDispatch, useSelector} from "react-redux"; 
import { deleteTask, loadTasks, addTask } from '../redux/Actions';

function Taskmanagement(props) {

    // const [tasks, setTasks] = useState([]);

    const dispatch = useDispatch();

    let {taskstest} = useSelector(state => state.data);
    

    useEffect(()=>{
      dispatch(loadTasks());
    },[])

    console.log(taskstest);

    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }


    // useEffect(() => {
    //   loadTasksFromLocalStorage();
    // }, []);
  
    function addEmptyTask(status) {
      console.log("add empty");
      const lastTask = taskstest[taskstest.length - 1];
  
      let newTaskId = 1;
  
      if (lastTask !== undefined) {
        newTaskId = lastTask.id + 1;
      }

  

      // taskstest = taskstest.map((task) => [
      //   ...task,
      //   {
      //     id: newTaskId,
      //     title: "",
      //     // deadline: null,
      //     description: "",
      //     urgency: "",
      //     status: status,

      //   }
      // ]

      // )
  
      // taskstest=((taskstest) => [
      //   ...taskstest,
      //   {
      //     id: newTaskId,
      //     title: "",
      //     // deadline: null,
      //     description: "",
      //     urgency: "",
      //     status: status,
      //   },
      // ]);
    }
  
    function addNewTask(taskToAdd) {
      let filteredTasks = taskstest.filter((task) => {
        return taskstest.id !== taskToAdd.id;
      });
  
      let newTaskList = [...filteredTasks, taskToAdd];
  
      taskstest = newTaskList;

      dispatch(addTask(newTaskList))
  
      // saveTasksToLocalStorage(newTaskList);
    }
  
    // function deleteTask(taskId) {
    //   let filteredTasks = tasks.filter((task) => {
    //     return task.id !== taskId;
    //   });
  
    //   setTasks(filteredTasks);
  
    //   saveTasksToLocalStorage(filteredTasks);
    // }
  
    // function moveTask(id, newStatus) {
    //   let task = tasks.filter((task) => {
    //     return task.id === id;
    //   })[0];
  
    //   let filteredTasks = tasks.filter((task) => {
    //     return task.id !== id;
    //   });
  
    //   task.status = newStatus;
  
    //   let newTaskList = [...filteredTasks, task];
  
    //   setTasks(newTaskList);
  
    //   saveTasksToLocalStorage(newTaskList);
    // }
  
    // function saveTasksToLocalStorage(tasks) {
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // }
  
    // function loadTasksFromLocalStorage() {
    //   let loadedTasks = localStorage.getItem("tasks");
  
    //   let tasks = JSON.parse(loadedTasks);
  
    //   if (tasks) {
    //     setTasks(tasks);
    //   }
    // }
  
    return (
        <div>
            <Mainheader/>
                {/* <div className="App"> */}
      <h1 className="task_management_header display-3 bg-danger fw-bolder">Task Management</h1>
      <br/>
      <br/>
      <main>
        <section>
          <StatusLine
            tasks={taskstest}
            addEmptyTask={addEmptyTask}
            addTask={addNewTask}
            deleteTask={handleDelete}
            // moveTask={moveTask}
            status="Backlog"
            backgroundColor="bg-secondary"
            icon="fa-snowflake"
          />
          <StatusLine
            tasks={taskstest}
            addEmptyTask={addEmptyTask}
            addTask={addNewTask}
            deleteTask={handleDelete}
            // moveTask={moveTask}
            status="To Do"
            backgroundColor="bg-warning"
            icon="fa-book-reader"
          />

          <StatusLine
            tasks={taskstest}
            addEmptyTask={addEmptyTask}
            addTask={addNewTask}
            deleteTask={handleDelete}
            // moveTask={moveTask}
            status="In Progress"
            backgroundColor="bg-danger"
            icon="fa-tasks"
          />
          <StatusLine
            tasks={taskstest}
            addEmptyTask={addEmptyTask}
            addTask={addNewTask}
            deleteTask={handleDelete}
            // moveTask={moveTask}
            status="Done"
            backgroundColor="bg-success"
            icon="fa-check-double"
          />
        </section>
      </main>
    {/* </div> */}

        </div>
    );
}

export default Taskmanagement;