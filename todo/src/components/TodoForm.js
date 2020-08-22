import React, { useState } from 'react';
import { UPDATE_TODO } from '../reducers';
// import { UPDATE_TODO } from '../reducers';

const TodoForm = props => {
    // constructor() {
    //     super();
    //     this.state = {
    //         todo: ""
    //     };
    // }
    const [ todo, setTodo ] = useState('');

   const handleChanges = e => {
        setTodo([...todo, e.target.value]);
    };

   const submitTodo = e => {
        e.preventDefault();

        const newTodo = {
            name: e.target.value,
            id: Date.now(),
            completed: false
        };

        props.dispatch({type: props.UPDATE_TODO, payload: newTodo});

        // e.target.value = '';
//         props.addTodo(todo);
        setTodo('');
    };

    // render() {
        return (
            <form 
            onSubmit={submitTodo}
            >
                <input
                    type='text'
                    name='todo'
                    // value={todo}
                    onChange={handleChanges} 
                />
                <button>Add Todo</button>
            </form>
        );
    }
// };

export default TodoForm;