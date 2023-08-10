import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onToggleDoneTodo, onDeleteTodo }) => {


    return (
        <>
            <ul className="list-group">
                {
                    todos.map( todo => (
                        <TodoItem 
                            key              = { todo.id }
                            todo             = { todo }
                            onDeleteTodo     = { onDeleteTodo }
                            onToggleDoneTodo = { onToggleDoneTodo }
                        />
                    ))
                }
            </ul>
        </>
    );
}
