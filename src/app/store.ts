import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  mohamed: {
    score: 0,
    won: 0,
  },
  fatima: {
    score: 0,
    won: 0,
  },
};

const mfReducer = createSlice({
  name: "managePoints",
  initialState,
  reducers: {
    addToMohamed(state) {
      state.mohamed.score++;
    },
    mohamedWon(state) {
      state.mohamed.won++;
    },
    addToFatima(state) {
      state.fatima.score++;
    },
    fatimaWon(state) {
      state.fatima.won++;
    },
  },
});

const store = configureStore({
  reducer: mfReducer.reducer,
});

export default store;

export const mfActions = mfReducer.actions;

// for typescript
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
