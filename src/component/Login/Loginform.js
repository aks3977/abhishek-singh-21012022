import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Loginform(props) {
  const initialValue = {
    username:"",
    password: ""
  };
  const [formData, setFormData] = useState(initialValue);
  const [isvalidUsername, setIsvalidUsername] = useState(true);
  const [isvalidPassword, setIsvalidPassword] = useState(true);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null)

  const {username, password} = formData; 

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(e.target.value);
  };

  useEffect(()=>{

    if(!/^[a-zA-Z0-9]+$/.test(username) && username!=""){
      setIsvalidUsername(false);
      setUsernameError("special characters not allowed !")
    }
    else if(username.length > 6 && username!=""){
      setIsvalidUsername(false);
      setUsernameError("username should not exceed more than 6 characters !")

    }
    
    else if (password.length < 6 && password != "") {
      setIsvalidPassword(false);
      setPasswordError("password must be atleast 6 characters long !");
    } 

    else{
      setIsvalidUsername(true);
      setIsvalidPassword(true);
    }
  
    

  },[handleOnChange])

  return (
    <>
      <div class="signup-form">
        <form>
          <h1>Login</h1>
          <hr />
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="username"
                placeholder="Username"
                required="required"
                value = {username}
                onChange={handleOnChange}
              />
            </div>
            {isvalidUsername === false && <p className="error">{usernameError}</p>}

          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
              </span>
              <input
                type="text"
                autoComplete="off"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
                value = {password}
                onChange={handleOnChange}
              />
            </div>
            {isvalidPassword === false && (
              <p className="error">{passwordError}</p>
            )}

          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">
              Sign in
            </button>
          </div>
        </form>
        {/* <div class="text-center">Already have an account? <a href="#">Login here</a></div> */}
      </div>
    </>
  );
}

export default Loginform;
