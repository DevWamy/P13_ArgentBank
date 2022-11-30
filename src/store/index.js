import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

/**
 * The store is an object that provides the state of the application.
 * It contains all the information of all the components attached to it.
 * Components are connected to the store to be notified of changes in the states to which they are linked.
 *
 * @params configureStore allows you to create a store by combining the reducers of the different slices.
 *
 * @returns {JSX.Element}  state managment
 */

const store = configureStore({
    reducer: {
        authSection: authReducer,
    },
});

export default store;
