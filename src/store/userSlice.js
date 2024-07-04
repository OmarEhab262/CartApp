import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
