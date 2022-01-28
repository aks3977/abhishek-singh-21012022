import Task from "./Task";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { loadTasks } from "../../redux/Actions";

export default function StatusLine(props) {
  const {
    status,
    backgroundColor,
    icon,
    tasks,
    deleteTask,
    addTask,
    onDragOver,
    onDrop,
    task,
    showDelete,
    setShowDelete,
    getTask

  } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  let taskList, tasksForStatus;


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
          key={task.id}
          task={task}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          getTask={getTask}

        />
      );
    });
  }
  console.log(tasksForStatus && tasksForStatus, "tasksForStatus");

  return (
    <div
      className={`statusLine ${backgroundColor}`}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, status)}
    >
      <h3 className="status_name text-center display-4">
        <i class={`fas ${icon}`} style={{ marginRight: "0.5rem" }}></i>
        {status}
      </h3>
      {taskList}
      {status === "Backlog" && (
        <div className="text-center pb-2">
          <i
            class="fa fa-plus-circle fa-3x text-light"
            onClick={() => history.push("/addtask")}
          ></i>
        </div>
      )}
    </div>
  );
}
