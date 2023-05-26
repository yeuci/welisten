import { createSlice } from "@reduxjs/toolkit";

export interface currentUserSlice {
  id: string;
  username: string;
  name: string;
  email: string;
  image: string;
  online: boolean;
  bio: string;
  newUser: boolean;
}

const initialState: currentUserSlice = {
  id: "",
  username: "",
  name: "",
  email: "",
  image: "",
  online: true,
  bio: "",
  newUser: false,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.online = action.payload.online;
      state.bio = action.payload.bio;
      state.newUser = action.payload.newUser;
    },
  },
});

export const { loadUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
