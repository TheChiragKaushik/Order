import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../features/orderSlice.js'



export const Store = configureStore({
    reducer: orderReducer,
    
})

