import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import { loadTasks, updateTask } from "../../redux/Actions";

export default function Task(props) {
  const { task, deleteTask } = props;
  const [state, setState] = useState({
    title: task.title,
    deadline: task.deadline,
    urgency: task.urgency,
    status: task.status,
    isCollapsed: task.isCollapsed,
  });

  console.log(task);

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleMoveRight = () => {
    if (task.status === "Backlog") {
      dispatch(updateTask({ ...state, status: "To Do" }, task.id));
    } else if (task.status === "To Do") {
      dispatch(updateTask({ ...state, status: "In Progress" }, task.id));
    } else if (task.status === "In Progress") {
      dispatch(updateTask({ ...state, status: "Done" }, task.id));
    }
    dispatch(loadTasks());
  };

  const handleMoveLeft = () => {
    if (task.status === "Done") {
      dispatch(updateTask({ ...state, status: "In Progress" }, task.id));
    } else if (task.status === "In Progress") {
      dispatch(updateTask({ ...state, status: "To Do" }, task.id));
    } else if (task.status === "To Do") {
      dispatch(updateTask({ ...state, status: "Backlog" }, task.id));
    }
    dispatch(loadTasks());
  };

  const onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);

  };

  return (
    <div
      className={`task collapsedTask`}
      draggable
      onDragStart={(e) => {
        onDragStart(e, task.id);
        localStorage.setItem("id", task.id);
      }}
    >
      <i
        class="fas fa-chevron-circle-left fa-3x"
        onClick={() => handleMoveLeft()}
        style={{cursor:"pointer"}}
      ></i>
      <form className="collapsed bg-dark px-2">
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled
          defaultValue={task.title}
        />
        <textarea
          rows="1"
          className="description input"
          name="description"
          placeholder="Enter Deadline"
          defaultValue={task.description}
        />
        <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input urgency="low" type="radio" name="urgency" />
            low
          </label>
          <label
            className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input urgency="medium" type="radio" name="urgency" />
            medium
          </label>
          <label
            className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input urgency="high" type="radio" name="urgency" />
            high
          </label>
        </div>
        <button onClick={() => {}} className="button">
          <i
            class="fas fa-pencil-alt fa-2x"
            onClick={() =>
              history.push({ pathname: "/edittask", state: { id: task.id } })
            }
          ></i>
        </button>

        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="button delete"
        >
          <i class="fas fa-trash-alt fa-2x"></i>
        </button>
      </form>
      <i
        class="fas fa-chevron-circle-right fa-3x"
        onClick={() => {
          handleMoveRight();
        }}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
}
