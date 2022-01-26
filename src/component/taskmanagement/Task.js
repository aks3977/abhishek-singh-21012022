// import "../styles/task.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import { loadTasks } from "../../redux/Actions";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function Task(props) {
  const {  task, deleteTask } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  const history = useHistory();

  // const [selectedDate,setSelectedDate] = useState(null);
  
  // const handleSubmit = (event) => {
  //   if (formAction === "delete") {
  //     deleteTask();
  //   }
  // }

  
  

  // function setUrgency(event) {
  //   setUrgencyLevel(event.target.attributes.urgency.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   if (formAction === "save") {
  //     if (collapsed) {
  //       setCollapsed(false);
  //     } else {
  //       let newTask = {
  //         id: task.id,
  //         title: event.target.elements.title.value,
  //         // deadline:selectedDate,
  //         description: event.target.elements.description.value,
  //         urgency: urgencyLevel,
  //         status: task.status,
  //         isCollapsed: true,
  //       };

  //       addTask(newTask);
  //       setCollapsed(true);
  //     }
  //   }

  //   if (formAction === "delete") {
  //     deleteTask(task.id);
  //   }
  // }

  // function handleMoveLeft() {
  //   let newStatus = "";
  //   if(task.status ==="To Do"){
  //     newStatus = "Backlog"
  //   }
  //   else if (task.status === "In Progress") {
  //     newStatus = "To Do";
  //   } else if (task.status === "Done") {
  //     newStatus = "In Progress";
  //   }

  //   if (newStatus !== "") {
  //     moveTask(task.id, newStatus);
  //   }
  // }

  // function handleMoveRight() {
  //   let newStatus = "";

  //   if (task.status === "Backlog") {
  //     newStatus = "To Do";
  //   } else if (task.status === "To Do") {
  //     newStatus = "In Progress";
  //   }else if(task.status === "In Progress"){
  //     newStatus = "Done"
  //   }

  //   if (newStatus !== "") {
  //     moveTask(task.id, newStatus);
  //   }
  // }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      {collapsed &&
      <i class="fas fa-chevron-circle-left fa-3x"
      //  onClick={()=>handleMoveLeft()}
       ></i>
      // <button onClick={handleMoveLeft} className="button moveTask">
      //   &#171;
      // </button>
      }
      <form
      //  onSubmit={handleSubmit} 
       className={collapsed ? "collapsed bg-dark px-2" : "bg-dark"}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        {/* <DatePicker autoComplete="off" className="description input" placeholderText="Deadline" name="deadline" selected={selectedDate} onChange={date=>setSelectedDate(date)}/> */}
        <textarea
          rows="1"
          className="description input"
          name="description"
          placeholder="Enter Deadline"
          defaultValue={task.description}
        />
        <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              // onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            low
          </label>
          <label
            className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input
              urgency="medium"
              // onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            medium
          </label>
          <label
            className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input
              urgency="high"
              // onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            high
          </label>
        </div>
        <button
          onClick={() => {
            // setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? <i class="fas fa-pencil-alt fa-2x" 
          onClick={()=>history.push({pathname:"/edittask",state:{id:task.id}})}></i> : "Save"}
        </button>
        {collapsed && (

          <button
          // type="submit"
            onClick={() => {
              deleteTask(task.id);
              // setFormAction("delete");
            }}
            className="button delete"
          >
          <i class="fas fa-trash-alt fa-2x"></i>             

          </button>
        )}
      </form>
      {collapsed &&
      <i class="fas fa-chevron-circle-right fa-3x" 
      // onClick={()=>handleMoveRight()}
      ></i>
      // <button onClick={handleMoveRight} className="button moveTask">
      //   &#187;
      // </button>
      }
    </div>
  );
}
