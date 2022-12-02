import { createSlice } from '@reduxjs/toolkit';

/**
 *  Handle user authentication for the login form for the signIn page
 *
 * @params name is used to identify the action that will be dispatched to the reducer. Each slice must have a unique name.
 * @params reducers list functions that will be executed when the corresponding action is dispatch.
 * @params createSlice gives access to the actions object containing all the actions. It's from this that we will dispatch them later.
 * @params createSlice also gives access to the reducer object which creates a reducer from the functions defined in reducers previously. The reducers of the slices will be pooled to create the global reducer of the store.
 *
 *
 * @returns {JSX.Element}  authentification managment
 */

export const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
    firstName: null,
    lastName: null,
    token: null,
    email: null,
    password: null,
    // remember: false, //A gerer plus tard
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth_slice',
    initialState,
    reducers: {
        login(state, action) {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },

        setToken(state, action) {
            state.token = action.payload.token;
            state.isAuth = true;
        },

        updateUser(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        logout(state) {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.isAuth = false;
            localStorage.removeItem('userToken');
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
