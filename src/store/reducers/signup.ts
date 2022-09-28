import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    mobilePhone: '',
    password: '',
    confirmPassword: '',
    email: '',
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
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        }
    }
});

export const { setMobilePhone, setEmail, setPassword, setConfirmPassword } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;