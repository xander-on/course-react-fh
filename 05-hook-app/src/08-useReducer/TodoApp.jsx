import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {


    const { 
        todos, todosCount,
        todosPendingCount,
        handleNewTodo,
        handleToggleDoneTodo,
        handleDeleteTodo
    } = useTodos();

    return (
        <div className="container">
            <h1>TodoApp: {todosCount} / <small>pendientes: {todosPendingCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos            = { todos }
                        onToggleDoneTodo = { handleToggleDoneTodo } 
                        onDeleteTodo     = { handleDeleteTodo } 
                    />
                </div>

                <div className="col-5">
                    <h4>otro titulo</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
            


        </div>
    );
}
