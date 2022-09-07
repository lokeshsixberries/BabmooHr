import { configureStore } from "@reduxjs/toolkit";
import theamReducer from "./Slices/TheamSlice";
const store = configureStore({
  reducer: { theams: theamReducer },
});

export default store;
