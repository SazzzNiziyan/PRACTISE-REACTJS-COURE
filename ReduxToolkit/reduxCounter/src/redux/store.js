import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./feature/counterSlice"


export const store = configureStore({
    reducer:{
        counter : CounterReducer
    }
})