import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./components/App";
import Nav from "./components/Nav";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
