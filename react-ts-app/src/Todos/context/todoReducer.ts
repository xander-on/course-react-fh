import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = 
    | { type:'addTodo',    payload:Todo }
    | { type:'toogleTodo', payload:{ id:string } }

export const todoReducer = ( state:TodoState, action:TodoAction ):TodoState => {

    switch ( action.type ) {
        case 'addTodo':
            return {
                ...state,
                todoCount: state.todoCount + 1,
                todos    : [ ...state.todos, action.payload ]
            };
        
        case 'toogleTodo':
            return {
                ...state,
                todos:state.todos.map( todo => {
                    if ( todo.id === action.payload.id ) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo
                })
            }
        
        default:
            return state;
    }
}