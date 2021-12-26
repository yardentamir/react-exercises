import React, { useState } from 'react';

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
      return <div key={index} style={{ textDecoration: !todo.completed && "line-through" }} onClick={() => changeState(index)}>{todo.name} {todo.completed ? <span> &#10003;</span> : <span> &#10060;</span>}</div>;
    })
  }

  const changeState = (index) => {
    setTodos(prevState => [...prevState, todosState[index].completed = !todosState[index].completed]);
  }


  return (
    <div>
      {renderTodos()}
    </div>
  )
}
