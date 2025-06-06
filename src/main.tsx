import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import './assets/styles/index.css'
import './assets/styles/App.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
