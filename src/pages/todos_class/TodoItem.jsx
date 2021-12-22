import React from 'react';
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.todosRef = React.createRef();
    this.iconRef = React.createRef();
  }

  componentDidMount = () => {

    switch (this.props.filerChoose) {
      case "completed":
        if (!this.props.todo.isChecked)
          this.todosRef.current.attributes.class.value = "todo display-none";
        break;
      case "unCompleted":
        if (this.props.todo.isChecked)
          this.todosRef.current.attributes.class.value = "todo display-none";
        break;
      default:
        this.todosRef.current.attributes.class.value = "todo";
        break;
    }

    if (this.props.todo.isChecked) {
      this.todosRef.current.attributes.class.value += " completed";
      this.iconRef.current.attributes.class.value = "far check-icon fa-check-square";
    } else {
      this.iconRef.current.attributes.class.value = "far check-icon fa-square";
    }

  }


  render = () => {
    return (
      <div key={uuidv4()} className="todo" ref={this.todosRef}>
        <li>{this.props.todo.value}</li>
        <span><i className="far fa-trash-alt" onClick={() => this.props.deleteCallBack(this.props.todo.id)} ></i></span>
        <span><i className="far fa-edit" onClick={() => this.props.editTodo(this.props.todo.id)}></i></span>
        <span><i ref={this.iconRef} className="far check-icon" onClick={() => this.props.checkCallBack(this.props.todo.id)} ></i></span>
      </div>
    )
  }
}