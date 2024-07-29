import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:""
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    save(state,action){
        state.value = action.payload 
    },
    clear(state){
        state.value = ""
    }
  },
});

export const tokenReducer = tokenSlice.reducer
export const {clear,save} = tokenSlice.actions
