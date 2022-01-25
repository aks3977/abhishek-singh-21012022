import React from "react";
import { useHistory, useLocation } from "react-router-dom";


function Mainheader(props) {
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    localStorage.removeItem("login");
    history.push("/");
  };

  return (
    <>
      <div className="main_header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <NavLink to={{ pathname: "/" }}> */}
            <a
              className="navbar-brand"
            //   onClick={() => history.push("/")}
              style={{ color: "white" }}
            >
              <i class="fas fa-calendar-week"></i> my todo
            </a>
            {/* </NavLink> */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={()=>history.push("/dashboard")} style={{cursor:"pointer"}}>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>history.push("/taskmanagement")} style={{cursor:"pointer"}}>
                  Task Management
                </a>
              </li>
            </ul>
            {/* <form className="d-flex"> */}
            <button
              className="my-btn"
              type="submit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={()=>logout()}
            >
              Logout
            </button>
            {/* </form> */}
            {/* </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Mainheader;
