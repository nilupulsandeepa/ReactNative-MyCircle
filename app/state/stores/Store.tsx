import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/ThemeSlice"

const Store = configureStore({
    reducer: {
        theme: ThemeReducer //Add the theme slice
    }
})

export default Store;