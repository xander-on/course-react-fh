// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";



export const TodoList = () => {

    // const context = useContext( TodoContext );

    // const { todos } = context.todoState;

    const { todos } = useTodos();

    return (
        <ul>
            { todos.map( todo => <TodoItem key={todo.id} todo={todo}/> ) }
        </ul>
    );
}
