import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSingleTask, loadTasks, updateTask } from "../../redux/Actions";

function EditTask(props) {
  console.log("props", props);
  const [state, setState] = useState({
    title: "",
    deadline: "",
    urgency: "",
    status: "",
    isCollapsed: "",
  });

  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { title, deadline, urgency, status, isCollapsed } = state;

  useEffect(() => {
    dispatch(getSingleTask(props.location.state.id));
  }, []);

  const { task } = useSelector((state) => state.data);

  useEffect(() => {
    if (task) {
      setState({ ...task });
    }
  }, [task]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateTask(state, props.location.state.id));
    history.push("/taskmanagement");
    window.location.reload();

    // }
  };

  return (
    <div>
      <div class="signup-form">
        <form style={{ background: "black" }} onSubmit={handleSubmit}>
          <h1 className="text-light text-center">Edit Task</h1>
          <hr />
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user text-light"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="title"
                placeholder="Enter the title"
                required="required"
                value={title}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group" style={{ minWidth: "100%" }}>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user text-light"></i>
              </span>

              <select
                class="form-control"
                name="urgency"
                required="required"
                value={urgency}
                onChange={handleOnChange}
              >
                <option value="select priority" disabled selected>
                  Select priority
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock text-light"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="deadline"
                placeholder="Enter the task deadline"
                required="required"
                value={deadline}
                onChange={handleOnChange}
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style={{ marginRight: "1rem" }}
              onClick={() => history.push("/taskmanagement")}
            >
              cancel
            </button>

            <button type="submit" class="btn btn-primary btn-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
