import { createSlice } from "@reduxjs/toolkit";
import { IHobbies } from "../../types/types";


export const initialState: IHobbies = {
    firstName: '',
    lastName: '',
    birthday: NaN,
    year: '',
    month: '',
    day: '',
    sex: '',
    ocean: 'Atlantic',
    hobby: [],
    hobbies: []
};

export const personInfoSlice = createSlice({
    name: 'persInfo',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        setDay: (state, action) => {
            state.day = action.payload;
        },
        setBirthday: (state, action) => {
            state.year = action.payload;
            let full = `${state.year}.${state.month}.${state.day}`;
            let age = Math.floor((new Date().getTime() - new Date(full).getTime()) / (24 * 3600 * 365.25 * 1000) | 0);
            state.birthday = age;
        },
        setSex: (state, action) => {
            state.sex = action.payload;
        },
        setOcean: (state, action) => {
            state.ocean = action.payload;
        },
        setHobbies: (state, action) => {
            state.hobbies?.push(action.payload);
            state.hobby = state.hobbies?.map((hobby) => hobby.checked && hobby.value).join(' ');
        }
    }
});

export const { setBirthday, setFirstName, setLastName, setOcean, setSex, setMonth, setDay, setHobbies } = personInfoSlice.actions;
export const personInfoReducer = personInfoSlice.reducer;
