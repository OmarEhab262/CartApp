import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, image, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity; // Increment quantity if item exists
      } else {
        state.cartItems.push({ id, name, price, image, quantity: 1 }); // Default quantity to 1 if item is added for the first time
      }
    },
    updateCartItem: (state, action) => {
      const { id, quantity, size, color } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.size = size;
        existingItem.color = color;
      }
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idToRemove
      );
    },
  },
});

export const { addItemToCart, updateCartItem, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
