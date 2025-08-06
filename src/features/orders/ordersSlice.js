import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: []
  },
  reducers: {
    setOrders: (state, action) => {
      state.list = action.payload;
    },
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
 
  }
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
