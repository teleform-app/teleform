import React from "react";
import ReactDOM from "react-dom/client";
import "sanitize.css";
import "./index.css";
import { App } from "./components/App";
import "./telegram";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
