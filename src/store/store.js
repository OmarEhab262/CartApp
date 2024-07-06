import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import navSlice from "./active";
import itemsReducer from "./itemsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    active: navSlice,
    items: itemsReducer,
    cart: cartReducer,
  },
  // Enable Redux DevTools only in development mode
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
