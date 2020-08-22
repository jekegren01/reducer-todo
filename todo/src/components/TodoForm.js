import React, { useState } from 'react';

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
        props.addTodo(todo);
        setTodo('');
    };

    // render() {
        return (
            <form onSubmit={submitTodo}>
                <input
                    type='text'
                    name='todo'
                    value={todo}
                    onChange={handleChanges} 
                />
                <button>Add Todo</button>
            </form>
        );
    }
// };

export default TodoForm;