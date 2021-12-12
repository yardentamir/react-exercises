import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import JsxBasics from "./pages/2.2-jsx-basics/2.2-jsx-basics";
import Boxes from "./pages/3.1-boxes/3.1-boxes";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<JsxBasics />, document.getElementById("root"));
ReactDOM.render(<Boxes />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
