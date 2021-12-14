import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import JsxBasics from "./pages/2.2-jsx-basics/2.2-jsx-basics";
// import Boxes from "./pages/3.1-boxes/3.1-boxes";
// import Quiz from "./pages/3.2-quiz/3.2-quiz";
// import ButtonApp  from "./pages/4.1-buttons/4.1-buttons";
// import Cards from "./pages/4.2-cards/4.2-cards";
//import Cards2 from "./pages/6.1-class_based_component/6.1-class_based_component";
// import Increment from "./pages/7.1-increment/7.1-increment";
//import HideAndSeek from "./pages/7.2-hide_and_seek/7.2-hide_and_seek";
// import FavoriteColor from "./pages/8.1-life-cycle-methods/8.1-life-cycle-methods";
import BoxAnimation from "./pages/8.1-box_animation/8.1-box_animation";

ReactDOM.render(<BoxAnimation />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
