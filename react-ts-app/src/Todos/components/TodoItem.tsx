import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";


interface props{
    todo: Todo
}

export const TodoItem = ({ todo }:props) => {

    const context = useContext( TodoContext );

    // const handleDbClick = () => context.toggleTodo( todo.id );

    return (
        <li 
            style={{ cursor: 'pointer', textDecoration: todo.done ? 'line-through' : '' }}
            onDoubleClick={ () => context.toggleTodo( todo.id ) }
        >
            { todo.description }
        </li>
    );
}
