import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const handleCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const idx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx === -1) {
        const tempItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempItem);
      } else {
        state.cartItems[idx].itemQuantity += 1;
      }
    },

    removeFromCart(state, action) {
      const idx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx >= 0) {
        if (state.cartItems[idx].itemQuantity > 1) {
          state.cartItems[idx].itemQuantity -= 1;
        } else {
          state.cartItems.map(() => {
            const filteredCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
            state.cartItems = filteredCartItems;
          });
        }
      }
    },

    deleteFromCart(state, action) {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredCartItems;
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = handleCart.actions;
export default handleCart.reducer;
