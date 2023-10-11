import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    clicks : 0
}


export const mainSlice = createSlice({
    name : "main",
    initialState : INITIAL_STATE,
    reducers : {
        increment : (state, action) => {
            state.clicks = state.clicks+1
        }
    }
})


export const {increment} = mainSlice.actions;

export default mainSlice.reducer