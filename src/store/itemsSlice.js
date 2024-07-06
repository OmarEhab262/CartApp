import { createSlice } from "@reduxjs/toolkit";
import f1 from "./products/f1.jpg";
import f2 from "./products/f2.jpg";
import f3 from "./products/f3.jpg";
import f4 from "./products/f4.jpg";
import f5 from "./products/f5.jpg";
import f6 from "./products/f6.jpg";
import f7 from "./products/f7.jpg";
import f8 from "./products/f8.jpg";
import n1 from "./products/n1.jpg";
import n2 from "./products/n2.jpg";
import n3 from "./products/n3.jpg";
import n4 from "./products/n4.jpg";
import n5 from "./products/n5.jpg";
import n6 from "./products/n6.jpg";
import n7 from "./products/n7.jpg";

const initialState = {
  items: [
    {
      id: 1,
      image: f1,
      name: "T-shirt 1",
      price: 19.99,

      type: "man",
    },
    {
      id: 2,
      image: f2,
      name: "T-shirt 2",
      price: 21.99,

      type: "man",
    },
    {
      id: 3,
      image: f3,
      name: "T-shirt 3",
      price: 18.99,

      type: "man",
    },
    {
      id: 4,
      image: f4,
      name: "T-shirt 4",
      price: 22.99,

      type: "man",
    },
    {
      id: 5,
      image: f5,
      name: "T-shirt 5",
      price: 20.99,

      type: "man",
    },
    {
      id: 6,
      image: f6,
      name: "T-shirt 6",
      price: 17.99,

      type: "woman",
    },
    {
      id: 7,
      image: f7,
      name: "T-shirt 7",
      price: 19.49,

      type: "woman",
    },
    {
      id: 8,
      image: f8,
      name: "T-shirt 8",
      price: 23.99,

      type: "woman",
    },
    {
      id: 9,
      image: n1,
      name: "T-shirt 9",
      price: 21.49,

      type: "woman",
    },
    {
      id: 10,
      image: n2,
      name: "T-shirt 10",
      price: 20.49,

      type: "woman",
    },
    {
      id: 11,
      image: n3,
      name: "T-shirt 11",
      price: 17.99,

      type: "children",
    },
    {
      id: 12,
      image: n4,
      name: "T-shirt 12",
      price: 19.49,

      type: "children",
    },
    {
      id: 13,
      image: n5,
      name: "T-shirt 13",
      price: 23.99,

      type: "children",
    },
    {
      id: 14,
      image: n6,
      name: "T-shirt 14",
      price: 21.49,

      type: "children",
    },
    {
      id: 15,
      image: n7,
      name: "T-shirt 15",
      price: 20.49,

      type: "children",
    },
  ],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    selectItem(state, action) {
      state.selectedItem = action.payload;
    },
    resetSelectedItem(state) {
      state.selectedItem = null;
    },
  },
});

export const { selectItem, resetSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
