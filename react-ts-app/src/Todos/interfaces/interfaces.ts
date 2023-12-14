


export interface Todo{
    id: string;
    description: string;
    done: boolean;
}

export interface TodoState{
    todoCount:number;
    todos:Todo[];
    completed:number;
    pending:number;
}