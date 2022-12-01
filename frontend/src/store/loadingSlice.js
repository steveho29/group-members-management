


import { createSlice } from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
    name:'loading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload
        }
    }
})

export const {setIsLoading} = loadingSlice.actions
