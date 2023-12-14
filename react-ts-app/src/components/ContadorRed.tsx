import { useReducer } from "react";

const initialState = {
    counter: 0
}

type ActionType = 
    | { type:'incrementar' } 
    | { type:'decrementar' }
    | { type:'custom', payload: number };

const contadorReducer = (state: typeof initialState, action:ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return { ...state, counter: state.counter + 1 };
        
        case 'decrementar':
            return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0};

        case 'custom':
            return { ...state, counter: action.payload };

        default:
            return state
    }
}

export const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <>
            <div className="mt-5">
                <h2>Use Reducer</h2>
                <h4>Contador: { contadorState.counter }</h4>
                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => dispatch({ type:'incrementar' }) }
                >
                    +1
                </button>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => dispatch({ type:'decrementar' }) }
                >
                    -1
                </button>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => dispatch({ type:'custom', payload: 100 }) }
                >
                    100
                </button>
            </div>
        </>
    );
}
