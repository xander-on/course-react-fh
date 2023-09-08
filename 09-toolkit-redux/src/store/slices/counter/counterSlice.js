import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        counter: 10,
        times: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },

        incrementBy: ( state, action ) => {
            console.log(action);
            state.counter += action.payload;
        },

        decrement: ( state ) => {
            state.counter -= 1;
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;



//snnipet para crear automaticamente slices usado
//https://gist.github.com/Klerith/060281f76f3b7f0a458e4b83b1fc0062