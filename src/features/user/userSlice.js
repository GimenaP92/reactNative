import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
   initialState: {
        userEmail: null,
}
,
   reducers: {
                setUser: (state, action) => {
    state.userEmail = action.payload;
},
    clearUser: (state) => {
    state.userEmail = null;  
    }
   }
}); 

export const { setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;