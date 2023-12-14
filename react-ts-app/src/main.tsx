import React    from 'react'
import ReactDOM from 'react-dom/client'
// import App      from './App.tsx'
import { AppTodos } from './Todos/AppTodos.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppTodos />
    </React.StrictMode>,
);
