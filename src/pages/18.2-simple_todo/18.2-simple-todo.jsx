
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ShowText() {

  const [todosState, setTodos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const renderTodos = () => {
    return todosState.map((todo, index) => {
      return <div key={uuidv4()} style={{ textDecoration: !todo.completed && "line-through" }} onClick={() => changeState(index)}>{todo.name} {todo.completed ? <span key={uuidv4()}> &#10003;</span> : <span > &#10060;</span>}</div>;
    })
  }

  const changeState = (index) => {
    const data = [...todosState];
    data[index].completed = !data[index].completed;
    setTodos(data);
  }


  return (
    <div>
      {renderTodos()}
    </div>
  )
}
