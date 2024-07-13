import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mohamed: {
    score: 0,
  },
  fatima: {
    score: 0,
  },
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incMohamed(state) {
      state.mohamed.score++;
    },
    incFatima(state) {
      state.fatima.score++;
    },
    zeroingScore(state) {
      state.fatima.score = 0;
      state.mohamed.score = 0;
    },
  },
});

export const scoreReducer = scoreSlice.reducer;
export const { incMohamed, incFatima, zeroingScore } = scoreSlice.actions;

// exporting state so that i don't have to repeat myself

// export const mohamedState = (state: initState) => state.mohamed;
// export const fatimaState = (state: initState) => state.fatima;
