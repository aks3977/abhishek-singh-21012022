import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Blankheader from "../H&F/Blankheader";
import { NavLink } from "react-router-dom";
import Form from "../component/register/Form";

function Register(props) {
  return (
    <>
      <Blankheader />
      <Form />
    </>
  );
}

export default Register;
