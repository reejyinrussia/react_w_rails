import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoForm';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {





  }

  addItem = (name) => {
    const { todos } = this.state;

    // todo remove after I wire it up
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()

    this.setState({ todos: [...todos, { id, name, complete: false }] })

  }

  updateTodo = (id) => {
    const todos = this.state.todos.map( t => {
      if (t.id === id)
      return { ...t, complete: !t.complete }
      return t
    });
    this.setState({ todos });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter( t => t.id !== id ) })
  }

  render() {
    return (
      <div className = "container">
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;
