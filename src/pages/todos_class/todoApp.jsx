import React from 'react';
import TodoForm from './todoForm';
import TodoItem from './TodoItem';
import './todoApp.css';
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      filerChoose: "all",
      todoList: []
    };
    this.LOCAL_STORAGE_KEY = "todos";
  }

  componentDidMount = () => {
    const storedTodos = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    if (storedTodos) this.setState({ todoList: storedTodos });
  }

  componentDidUpdate = () => {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.state.todoList));
  }

  updatedInput(key, value) {
    this.setState({ [key]: value });
    console.log(this.state.filerChoose);
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = { id: uuidv4(), value: this.state.newTodo, isChecked: false };
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newTodo]
    }));

  }

  deleteTodo = (currentTodoId) => {
    const updatedList = this.state.todoList.filter(todo => todo.id !== currentTodoId);
    this.setState({ todoList: updatedList });
  }

  isChecked = (currentTodoId) => {
    const getTodoObj = this.state.todoList.find(todo => todo.id === currentTodoId);
    const TodoIndex = this.state.todoList.indexOf(getTodoObj);
    this.setState((pervState) => {
      return pervState.todoList[TodoIndex].isChecked = !pervState.todoList[TodoIndex].isChecked;
    });
  };



  render = () => {
    return (
      <div className="main">
        <header><h1>my To do list</h1></header>
        <section className="container">
          <div className="todo-container">
            <TodoForm value={this.state.newTodo} callback={({ target: { value } }) => this.updatedInput("newTodo", value)} submitCallback={this.addTodo} selectCallBack={({ target: { value } }) => this.updatedInput("filerChoose", value)} />
            <ul className="todo-list">
              {this.state.todoList.map((todo) => {
                return (
                  <TodoItem key={uuidv4()} filerChoose={this.state.filerChoose} todo={todo} checkCallBack={({ target: { id } }) => this.isChecked(id)} deleteCallBack={({ target: { id } }) => this.deleteTodo(id)} />
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

