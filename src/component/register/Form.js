import React from "react";
import { NavLink } from "react-router-dom";


function Form(props) {
  return (
    <>
      <div class="signup-form">
        <form>
          <h1>Register</h1>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-mobile"></i>
              </span>
              <input
                type="mobile"
                class="form-control"
                name="mobile"
                placeholder="Mobile Number"
                required="required"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
              </span>
              <input
                type="text"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
              <input
                type="text"
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <h3>Add image</h3>

            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-id-badge"></i>
              </span>
              <input
                type="file"
                accept="image/*"
                class="form-control"
                name="image"
                placeholder="upload image"
                required="required"
                multiple="false"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="checkbox-inline">
              <input type="checkbox" required="optional" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
        {/* <div class="text-center">Already have an account? <a href="#">Login here</a></div> */}
      </div>
    </>
  );
}

export default Form;
