import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: []
  },
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
    // otras acciones que necesites...
  }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
