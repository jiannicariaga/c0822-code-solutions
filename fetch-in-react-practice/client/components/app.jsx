import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // componentDidMount() {
  //   fetch('/api/todos')
  //     .then(response => response.json())
  //     .then(data => this.setState({ todos: data }))
  //     .catch(err => console.error(err));
  // }

  async componentDidMount() {
    try {
      const response = await fetch('/api/todos');
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json();
      this.setState({ todos: data });
    } catch (error) {
      console.error(error);
    }
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        const currentTodos = this.state.todos;
        const newTodos = currentTodos.concat(data);
        this.setState({ todos: newTodos });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    let stateIndex;
    let toggledStatus;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        stateIndex = i;
        toggledStatus = { isCompleted: !this.state.todos[i].isCompleted };
      }
    }

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toggledStatus)
    })
      .then(response => response.json())
      .then(data => {
        const todosCopy = [].concat(this.state.todos);
        todosCopy[stateIndex] = data;
        this.setState({ todos: todosCopy });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
