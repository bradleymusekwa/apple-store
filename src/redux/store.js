import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './features/cart/cartSlice';
import orderSliceReducer from './features/orders/orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    order: orderSliceReducer,
  },
})