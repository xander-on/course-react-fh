import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => JSON.parse( localStorage.getItem('todos') ) || [];

export const useTodos = () =>{

    const [ todos, dispatch ] = useReducer( todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos) || [] );
    }, [todos])


    const handleNewTodo = ( todo ) => {
        const action = {
            type    : '[TODO] Add Todo',
            payload : todo
        }
        dispatch( action );
    }


    const handleToggleDoneTodo = ( id ) => {
        const action = {
            type    : '[TODO] Toggle Done Todo',
            payload : id
        }
        dispatch( action );
    }


    const handleDeleteTodo = ( id ) =>{
        const action = {
            type    : '[TODO] Delete Todo',
            payload : id
        }
        dispatch( action );
    }


    return{
        todos,
        todosCount : todos.length,
        todosPendingCount : todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleToggleDoneTodo,
        handleDeleteTodo
    }
}