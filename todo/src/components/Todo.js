import React, { useReducer } from 'react';
// import {
//     todoReducer,
//     initialState,
//     TOGGLE_TODO,
//   } from '../reducers';

const Todo = props => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={() => 
                // props.toggleTodo(props.todo.id)
                props.dispatch({ type: props.TOGGLE_TODO })
            }
        >
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;