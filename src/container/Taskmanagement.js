import React, { useEffect, useRef, useState } from "react";
import StatusLine from "../component/taskmanagement/StatusLine";
import Mainheader from "../H&F/Mainheader";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  loadTasks,
  addTask,
  getSingleTask,
  updateTask,
} from "../redux/Actions";

let initialState = {
  title: "",
  deadline: "",
  urgency: "",
  status: "",
  isCollapsed: "",
};

function Taskmanagement(props) {

  const dispatch = useDispatch();

  let { taskstest } = useSelector((state) => state.data);
  let { task } = useSelector((state) => state.data);
  const [actionCalled, setActionCalled] = useState(false);
  const [ShowDelete, setShowDelete] = useState(false);
  const [dropData, setDropData] = useState({ status: "", id: "" });

  const [state, setState] = useState(initialState);

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  console.log(taskstest);
  console.log("task", task);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  function addEmptyTask(status) {
    console.log("add empty");
    const lastTask = taskstest[taskstest.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }
  }

  function addNewTask(taskToAdd) {
    let filteredTasks = taskstest.filter((task) => {
      return taskstest.id !== taskToAdd.id;
    });

    let newTaskList = [...filteredTasks, taskToAdd];

    taskstest = newTaskList;

    dispatch(addTask(newTaskList));
  }

  const onDragOver = (e) => {
    e.preventDefault();
    console.log("drag over");
  };

  useEffect(() => {
    if (dropData.status && dropData.id) {
      dispatch(updateTask({ ...task, status: dropData.status }, dropData.id));
      setDropData(undefined);
      dispatch(loadTasks());
    }
  }, [task]);

  const onDrop = (e, cat) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("id");
    setDropData({ status: cat, id: id });
    dispatch(getSingleTask(id));
    setState({ ...task });

    // setState({...task});

    console.log(task, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(initialState, "..................................");
  };
  return (
    <div className="taskmangement">
      <Mainheader />
      {/* <div className="App"> */}
      <h1 className="task_management_header display-3 bg-danger fw-bolder">
        Task Management
      </h1>
      <br />
      <br />
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
            onDragOver={onDragOver}
            onDrop={onDrop}
            ShowDelete={ShowDelete}
            setShowDelete={setShowDelete}
            // getTask={getTask}
            // task={task}
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
            onDragOver={onDragOver}
            onDrop={onDrop}
            ShowDelete={ShowDelete}
            setShowDelete={setShowDelete}
            // getTask={getTask}

            // task={task}
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
            onDragOver={onDragOver}
            onDrop={onDrop}
            ShowDelete={ShowDelete}
            setShowDelete={setShowDelete}
            // getTask={getTask}

            // task={task}
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
            onDragOver={onDragOver}
            onDrop={onDrop}
            ShowDelete={ShowDelete}
            setShowDelete={setShowDelete}
            // getTask={getTask}

            // task={task}
          />
        </section>
      </main>
      {/* </div> */}
      {/* {ShowDelete===true && */}
      {/* <i class="fa fa-trash-alt fa-4x text-danger" 
    style={{position:"fixed",right:"0",bottom:"0",padding:"4rem"}}
    onDragOver={(e)=>onDragDeleteOver(e)}
    onDrop={(e)=> onDropDelete(e)}

    ></i> */}
      {/* } */}
    </div>
  );
}

export default Taskmanagement;
