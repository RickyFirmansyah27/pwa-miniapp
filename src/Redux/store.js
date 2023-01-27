import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./action/reducers";

export const store = configureStore({
    reducer
});