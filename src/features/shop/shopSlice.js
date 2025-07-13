import { createSlice } from '@reduxjs/toolkit';
import { mockCategories } from '../../components/helpers/mockCategories';

const shopSlice = createSlice({
  name: 'shop',
   initialState: {
  categories: mockCategories,
  selectedCategory: '',
  selectedProductId: null,
}
,
   reducers: {
    setSelectedCategory: (state, action) => {
  state.selectedCategory = action.payload;
},
setSelectedProductId: (state, action) => {
  state.selectedProductId = action.payload;
},

   }
}); 

export const { setSelectedCategory,setSelectedProductId} = shopSlice.actions;
export default shopSlice.reducer;