import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {initialState, signUpReducer, signUpSlice} from './reducers/signup';
import userSchema from '../schemes/schema.json';
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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
export type AppDispatch = AppStore['dispatch']