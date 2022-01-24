import React from "react";
// import { useHistory } from "react-router-dom";
import Mainheader from "../H&F/Mainheader";
import Card from "../component/dashboard/Card";

function Dashboard(props) {
  // const history = useHistory();
  // const logout = () => {
  //   localStorage.removeItem("login");
  //   history.push("/");
  // };
  return (
    <>
      <Mainheader />
      <div className="container mt-5">
        <div className="row">
          <Card headerColor="bg-primary" footerColor="text-primary" />
          <Card headerColor="bg-secondary" footerColor="text-secondary" />
          <Card headerColor="bg-warning" footerColor="text-warning" />
          <Card headerColor="bg-danger" footerColor="text-danger" />
        </div>
        <br />
        <br />
        <div className="row">
          <Card headerColor="bg-success" footerColor="text-success" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
