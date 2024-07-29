import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mohamed: 0,
  fatima: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incMohamed(state) {
      state.mohamed++;
    },
    incFatima(state) {
      state.fatima++;
    },
    zeroingScore(state) {
      state.fatima = 0;
      state.mohamed = 0;
    },
  },
});

export const scoreReducer = scoreSlice.reducer;
export const { incMohamed, incFatima, zeroingScore } = scoreSlice.actions;

// exporting state so that i don't have to repeat myself

// export const mohamedState = (state: initState) => state.mohamed;
// export const fatimaState = (state: initState) => state.fatima;
