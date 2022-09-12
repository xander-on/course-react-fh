export const todoReducer = ( initialState = [], action ) => {

  switch( action.type ){

    case '[TODO] Add Todo': 
      return[ ...initialState,  action.payload ];
    default: return initialState;

    case '[TODO] Remove Todo':
      return initialState.filter( todo => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      return initialState.map( todo => {
        if( todo.id === action.payload ){
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });
  }
}