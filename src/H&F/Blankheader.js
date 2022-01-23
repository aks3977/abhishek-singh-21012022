import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

function Blankheader(props) {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <div className="main_header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <NavLink to={{ pathname: "/" }}> */}
            <a
              className="navbar-brand"
              onClick={() => history.push("/")}
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
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul> */}
            {/* <form className="d-flex"> */}
            {(history.location.pathname==="/" || history.location.pathname==="/register") ? (
                <button
                  className="my-btn"
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={() => history.push("/login")}
                >
                  Sign In
                </button>
            ):(
              <button
              className="my-btn"
              type="submit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={() => history.push("/register")}
            >
              Register
            </button>

            )
            }
            {/* </form> */}
            {/* </div> */}
          </div>
        </nav>
      </div>
      {/* <Loginmodal /> */}
    </>
  );
}

export default Blankheader;
