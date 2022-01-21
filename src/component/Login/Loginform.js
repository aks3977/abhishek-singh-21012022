import React from "react";

function Loginform(props) {
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
