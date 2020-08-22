import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

import {
  todoReducer,
  initialState,
  UPDATE_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  CLEAR_ALL
} from './reducers';

// const todos = [];

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // constructor() {
  //   super();
  //   this.state = {
  //     todos
  //   }
  // }

  const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(todoReducer, initialState);


  //class method to update state
  const toggleTodo = todoId => {
    setTodos(
      todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        // setTimeout(console.log(this.state.todos), 5000);
        // console.log(this.state.todos)
        return todo;
      })
    );
  };

  //class method to add a todo item
  const addTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    setTodos(
      [...todos, newTodo]
    );
    console.log(newTodo);
  };
console.log(todos);
  const clearCompleted = e => {
    e.preventDefault();
    setTodos(
      todos.filter(todo => !todo.completed)
    );
  };

  const clearAll = e => {
    e.preventDefault();
    setTodos(
      todos.filter(todos => !todos)
    );
  };


  // render() {
  //   console.log(this.state.todos)

    return (
      <div className='container'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={addTodo}/>
        </div>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            clearCompleted={clearCompleted}
            clearAll={clearAll}
          />
      </div>
    );
  }
// }

export default App;
