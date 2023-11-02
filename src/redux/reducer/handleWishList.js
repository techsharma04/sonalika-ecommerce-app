import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
};

const handleWishList = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      let itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
      } else {
        const tempItem = { ...action.payload, heart: true };
        state.wishListItems.push(tempItem);
      }
    },

    removeFromWishlist(state, action) {
      state.wishListItems.map(() => {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = handleWishList.actions;
export default handleWishList.reducer;
