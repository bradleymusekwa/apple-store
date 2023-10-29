import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../assets/data/productData";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newId = parseInt(payload.id);
      // local product
      if (newId > 100) {
        const product = productsData.find((item) => item.id === newId);
        state.cartItems.push({ ...product, quantity: 1 }); // Set quantity to 1 for new products
      } else {
        state.cartItems.push({ ...payload, quantity: 1 }); // Set quantity to 1 for products from the API
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productId
      );
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.id === productId
      );
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === payload
      );
      if (cartItem) {
        cartItem.quantity = Math.max(cartItem.quantity - 1, 0);
      }
    },
    calculateTotals: (state) => {
      let qty = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        qty += item.quantity || 0; // Handle undefined quantity
        amount += (item.price || 0) * (item.quantity || 0); // Handle undefined price and quantity
      });
      state.quantity = qty;
      state.total = amount;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
