import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addTask } from '../../redux/Actions';


function AddTask(props) {

    const [state, setState] = useState({
        title:"",
        deadline:"",
        urgency:"low",
        status:"Backlog",
        isCollapsed:"true"
    })

    const [error, setError] = useState("");
    const history = useHistory();

    const {title, deadline, urgency, status, isCollapsed} = state;
    // const handleOptionChange = (opt) => {
    //     urgency=opt;
    //   };

    const handleOnChange = (e) => {
        const{name, value} = e.target;
        setState({...state, [name]:value})
        console.log(e.target.value);
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(!title || !deadline || !urgency) {
        //     setError("please fill all the required input");
        // }else{
            dispatch(addTask(state));
            history.push("/taskmanagement");
        // }
    }
    
    return (
        <div>
                  <div class="signup-form">
        <form style={{background:"black"}} onSubmit={handleSubmit}>
        {/* {error && <p className="error">{error}</p>} */}

          <h1 className='text-light text-center'>Add Task</h1>
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
                // value = {email}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group" style={{minWidth:"100%"}}>
            <div class="input-group">
            <span class="input-group-addon">
                <i class="fa fa-user text-light"></i>
              </span>


                          <select
                            class="form-control"
                            name="urgency"
                            required="required"

                            // style={{minWidth:"95%"}}
                            // value={financialYearValue}
                            onChange={handleOnChange}
                            >
                            <option value="" disabled>
                              Select priority
                            </option>
                            <option value="low" selected>
                              Low
                            </option>
                            <option value="medium">Medium</option>
                            <option value="high">
                              High
                            </option>
                          </select>
                        </div>

            {/* {isvalidEmail === false && <p className="error">{emailError}</p>} */}
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
                // value = {password}
                onChange={handleOnChange}
              />
            </div>
            {/* {isvalidPassword === false && (
              <p className="error">{passwordError}</p>
            )} */}

          </div>
            {error && <p className='error'>{error}</p>}
          <div class="form-group">
            {/* {email!="" && password!="" && isvalidEmail===true && isvalidPassword===true ? ( */}
            <button type='submit'  class="btn btn-primary btn-lg">
              create task
            </button>
            {/* ):( */}
              {/* <button type="submit" class="btn btn-primary btn-lg" disabled>
              Sign in
            </button> */}

            {/* )} */}
          </div>
        </form>
        {/* <div class="text-center">Already have an account? <a href="#">Login here</a></div> */}
      </div>

        </div>
    );
}

export default AddTask;