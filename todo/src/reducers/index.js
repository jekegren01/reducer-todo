
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const CLEAR_ALL = "CLEAR_ALL";

export const initialState = {
    name: '',
    id: Date.now(),
    completed: false
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TODO:
            return { ...state, todo: action.payload, completed: false };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo=>{
                    if(todo.id === action.payload.id){
                        return {...todo, completed: !todo.completed}
                    } else 
                        return todo;
                })
            };
        case CLEAR_COMPLETED: 
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default: 
            return state;
    };
};