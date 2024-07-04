import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "navigation",
  initialState: {
    activeName: "all",
    changeCart: false,
  },
  reducers: {
    setActive: (state, action) => {
      state.activeName = action.payload.activeName; // Assuming payload has activeName
    },
    cartActive: (state, action) => {
      state.changeCart = action.payload.changeCart; // Assuming payload has changeCart
    },
  },
});

export const { setActive, cartActive } = navSlice.actions;

export default navSlice.reducer;
