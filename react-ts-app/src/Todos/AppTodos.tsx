import { TodoList }     from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";
import { useTodos }     from "./hooks/useTodos";



export const AppTodos = () => {
    return (
        <TodoProvider>
            <_TitleTodos/>    
            <TodoList />
        </TodoProvider>
    );
}



export const _TitleTodos = () => {
    
    const { pendingTodos } = useTodos();

    return (
        <h2>
            Todos: { pendingTodos }
        </h2>
    )
}
