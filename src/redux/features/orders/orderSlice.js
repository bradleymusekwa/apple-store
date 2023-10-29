import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    newOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { newOrder } = orderSlice.actions;

export default orderSlice.reducer;
