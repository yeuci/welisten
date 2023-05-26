import { configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "./features/currentSong/currentSongSlice";
import currentUserReducer from "./features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    currentSong: currentSongReducer,
    currentUser: currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
