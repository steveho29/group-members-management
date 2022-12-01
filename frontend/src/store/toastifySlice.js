import { createSlice } from "@reduxjs/toolkit";


const initialState = {message: '', type: ''}

export const toastifySlice = createSlice({
    name: 'toastify',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            console.log(action.payload)
            state = action.payload
            return action.payload
        },
        clearMessage: () => {
            return initialState
        }
    }
})

export const toastifyAction = toastifySlice.actions