import React from "react";

function Quiz() {
  return <div style={{ border: '3px solid black', width: '400px', margin: "0 auto", padding: "30px" }}>
    <QuizTitle />
    <Q1 />
    <Q2 />
  </div>
}

function QuizTitle() {
  return <h2>How Do You like Front End?</h2>
}


function Q1Title() {
  return <h3>How Much you love front end?</h3>
}

function Q1Input() {
  return <input type="range" min="1" max="100"></input>
}

function Q1() {
  return <div><Q1Title /><Q1Input /></div>
}



function Q2Title() {
  return <h3>What is your favorite front end feature?</h3>
}

function Q2Input() {
  return <input type="text"></input>
}


function Q2() {
  return <div><Q2Title /><Q2Input /></div>
}

export default Quiz;