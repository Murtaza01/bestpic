import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { scoreReducer } from "./scoreSlice";
import { tokenReducer } from "./tokenSlice";


const reducer = combineReducers({
  score:scoreReducer,
  token:tokenReducer
})

export const store = configureStore({
  reducer,
});



// for typescript
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
