import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: 'token',
    initialState: '',
    reducers: {
        putToken: (state, action) => action.payload,
        deleteToken: state => ''
    }
})

export const {putToken, deleteToken} = tokenSlice.actions
export default tokenSlice.reducer