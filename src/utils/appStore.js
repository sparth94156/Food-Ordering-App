// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./cartSlice";
import userReducer from './userSlice';

// Creating redux store
const appStore = configureStore({
    // This is the main reducer function for the whole appStore (It contains all the reducers of our slices)
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
})

export default appStore;