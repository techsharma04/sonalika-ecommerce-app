import { configureStore } from "@reduxjs/toolkit";
import handleCart from "./reducer/handleCart";
import handleWishList from "./reducer/handleWishList";

const store = configureStore({
  reducer: {
    cart: handleCart,
    wishlist: handleWishList,
  },
});

export default store;
