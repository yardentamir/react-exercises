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
      return <div key={index} style={{ textDecoration: !todo.completed ? "line-through" : "none" }} onClick={() => changeState(index)}>{todo.name}</div>;
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