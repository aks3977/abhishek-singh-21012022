import React from "react";
import Home from "./container/Home";
import "./SCSS/main.scss";
import { BrowserRouter } from "react-router-dom";
import Approute from "./Routes/Approute";


function App() {
  return (
    <>
      <BrowserRouter>
        <Approute/>
      </BrowserRouter>
    </>
  );
}

export default App;
