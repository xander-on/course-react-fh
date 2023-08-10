import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status      : 'not-authenticated', //checking, not-authenticated, authenticated
        uid         : null,
        email       : null,
        displayNmae : null,
        photoUrl    : null,
        errorMessage: null,
    },
    reducers: {
        login:(state, action) => {

        },

        logout: (state, payload) => {

        },

        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const { checkingCredentials } = authSlice.actions;