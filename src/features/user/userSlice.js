import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userEmail: null,
    name:null,
    lastName:null,
    localId: null,
    profileImage: null,
    phone: null,
    address: null,
  },
  reducers: {
    setUser: (state, action) => {
    state.userEmail = action.payload.userEmail || null;
    state.name = action.payload.name || null;
    state.lastName = action.payload.lastName || null;
    state.localId = action.payload.localId || null;
    state.profileImage = action.payload.profileImage || null;
    state.phone = action.payload.phone || null;
    state.address = action.payload.address || null;
    },
        setName: (state, action) => {
      state.name = action.payload || null;
    },
        setLastName: (state, action) => {
      state.lastName = action.payload || null;
    },
    setProfileImage: (state, action) => {
       state.profileImage = action.payload || null;
    },
        setPhone: (state, action) => {
      state.phone = action.payload || null;
    },
    setAddress: (state, action) => {
      state.address = action.payload || null;
    },
    clearUser: (state) => {
      state.userEmail = null;
      state.name = null;
      state.lastName = null;
      state.localId = null;
      state.profileImage = null;
      state.phone = null;
      state.address = null;
    },
  },
});
export const { setUser, setName, setLastName, setProfileImage, setPhone, setAddress, clearUser } = userSlice.actions;
export default userSlice.reducer;
