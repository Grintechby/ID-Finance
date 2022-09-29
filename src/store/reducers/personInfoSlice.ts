import { createSlice } from "@reduxjs/toolkit"



export const initialState = {
    firstName: '',
    lastName: '',
    birthday: NaN,
    date: '',
    sex: [''],
    ocean: 'Atlantic',
}

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
        setBirthday: (state, action) => {
            state.date = action.payload;
            state.birthday = new Date().getFullYear() - (+state.date);  
                  
        },
        setSex: (state, action) => {
            state.sex = action.payload;
        },
        setOcean: (state, action) => {
            state.ocean = action.payload;
        },
    }
});

export const { setBirthday, setFirstName, setLastName, setOcean, setSex } = personInfoSlice.actions;
export const personInfoReducer = personInfoSlice.reducer;

 //   "hobby": {
                //     "anyOf":[
                //         {"enum":["sport"]},
                //         {"enum":["beauty"]},
                //         {"enum":["it"]},
                //         {"enum":["pets"]}
                //     ]
                //   }