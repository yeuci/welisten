import { createSlice } from "@reduxjs/toolkit";

export interface CurrentSongState {
  url: string;
  title: string;
  artist: string;
  img: string;
}

const initialState: CurrentSongState = {
  url: "",
  title: "",
  artist: "",
  img: "",
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    changeSong: (state, action) => {
      state.url = action.payload.url;
      state.title = action.payload.title;
      state.artist = action.payload.artist;
      state.img = action.payload.img;
    },
  },
});

export const { changeSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;
