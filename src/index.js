import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import JsxBasics from "./pages/2.2-jsx-basics/2.2-jsx-basics";
// import Boxes from "./pages/3.1-boxes/3.1-boxes";
import Quiz from "./pages/3.2-quiz/3.2-quiz";

ReactDOM.render(<Quiz />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
