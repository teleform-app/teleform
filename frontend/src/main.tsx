import React from "react";
import ReactDOM from "react-dom/client";
import "sanitize.css";
import "./index.css";
import { App } from "./components/App";
import "./telegram";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
