import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const reducer = combineReducers({
    main : mainSlice
})

export const store = configureStore({
    reducer : reducer
})