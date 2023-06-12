import { createAction, createReducer } from '@reduxjs/toolkit';

export const loginSuccess = createAction('auth/loginSuccess');
export const loginFailure = createAction('auth/loginFailure');
export const logout = createAction('auth/logout');

const initialState = {
    token: null,
    error: null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginSuccess, (state, action) => {
            state.token = action.payload;
            state.error = null;
        })
        .addCase(loginFailure, (state, action) => {
            state.token = null;
            state.error = action.payload;
        })
        .addCase(logout, (state) => {
            state.token = null;
            state.error = null;
        });
});

export default authReducer;