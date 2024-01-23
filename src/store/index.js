
import productsReducer from './productsReducer';
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
    reducer: productsReducer,
});

export default store;