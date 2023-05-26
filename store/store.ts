import { configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "./features/currentSong/currentSongSlice";

export const store = configureStore({
  reducer: {
    currentSong: currentSongReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
