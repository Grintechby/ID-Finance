import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    mobilePhone: '',
    password: '',
    confirmPassword: '',
    email: '',
    inputPass: ''
    
};

export const signUpSlice = createSlice({
    name: 'sign',
    initialState,
    reducers: {
        setMobilePhone: (state, action) => {
            state.mobilePhone = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.inputPass = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
            if (state.inputPass === state.confirmPassword){
                state.password = state.inputPass;
            } else {
                state.password = state.password;
            }
        }
    }
});

export const { setMobilePhone, setEmail, setPassword, setConfirmPassword } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;