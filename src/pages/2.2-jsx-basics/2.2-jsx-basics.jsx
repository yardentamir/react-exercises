import React from "react";


function JsxBasics(){
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 =6;
  const string = "I love React!";
  return(
    <div>
      <p>{data[0]} {data[1]}</p>
      <p>{number1} + {number2} = {number1 + number2}</p>
      <p>{string.length}</p>
    </div>
  )
}

export default JsxBasics;

