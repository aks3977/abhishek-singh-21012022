import React from "react";
import Mainheader from "../H&F/Mainheader";
import Card from "../component/dashboard/Card";

function Dashboard(props) {
  return (
    <>
      <Mainheader />
      <div className="container mt-5">
        <div className="row">
          <Card headerColor="bg-primary" footerColor="text-primary" icon="fa-list" name="All Tasks" />
          <Card headerColor="bg-secondary" footerColor="text-secondary" icon="fa-snowflake" name="Backlogs" />
          <Card headerColor="bg-warning" footerColor="text-warning" icon="fa-book-reader" name="To-Do" />
          <Card headerColor="bg-danger" footerColor="text-danger" icon="fa-tasks" name="On Going" />
        </div>
        <br />
        <br />
        <div className="row">
          <Card headerColor="bg-success" footerColor="text-success" icon="fa-check-double" name="Done"/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
