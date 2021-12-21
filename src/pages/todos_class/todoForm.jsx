import React from 'react';
import "./todoApp.css"

export default function TodoForm({ value, callback, submitCallback, selectCallBack }) {

  return (
    <>
      <div className="form-container">
        <form onSubmit={submitCallback}>
          <input type="text" className="todo-input" placeholder="your todo here" value={value}
            onChange={callback} />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-circle"></i>
          </button>
        </form>
        <div className="select">
          <select className="filter-todos" onChange={selectCallBack} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="unCompleted">unCompleted</option>
          </select>
        </div>
      </div>
    </>
  )

}