import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mohamedScore: 0,
  fatimaScore: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incMohamed(state) {
      state.mohamedScore++;
    },
    incFatima(state) {
      state.fatimaScore++;
    },
    zeroingScore(state) {
      state.fatimaScore = 0;
      state.mohamedScore = 0;
    },
  },
});

export const scoreReducer = scoreSlice.reducer;
export const { incMohamed, incFatima, zeroingScore } = scoreSlice.actions;

// exporting state so that i don't have to repeat myself

// export const mohamedState = (state: initState) => state.mohamed;
// export const fatimaState = (state: initState) => state.fatima;
