// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    //for sorting the list based on completed or not
    console.log(props.todos);
    return (
        <div>
            <div className='todo-list'>
                {props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo}
                    //  toggleTodo={props.toggleTodo}
                     // toggleTodo={toggleTodo}
                     // clearCompleted={clearCompleted}
                     // clearAll={clearAll}
                     TOGGLE_TODO={props.TOGGLE_TODO}
                     CLEAR_COMPLETED={props.CLEAR_COMPLETED}
                     CLEAR_ALL={props.CLEAR_ALL}
                     state={props.state}
                     dispatch={props.dispatch} 
                     />
                ))}
            </div>
            <div className='buttons'>
                <button className='clear-btn' onClick={props.clearCompleted}>
                    Clear Completed
                </button>
                <button className='clear-btn' onClick={props.clearAll}>
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default TodoList;