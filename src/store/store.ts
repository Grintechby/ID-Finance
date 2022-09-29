import {configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { signUpReducer } from './reducers/signupSlice';
import { personInfoReducer } from './reducers/personInfoSlice';

export const rootReducer = combineReducers({
    signUp: signUpReducer,
    personInfo: personInfoReducer
});

export const configStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configStore>;
export type AppDispatch = AppStore['dispatch'];