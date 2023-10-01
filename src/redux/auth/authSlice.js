import { createSlice } from '@reduxjs/toolkit';
import { register,logIn,logOut,fetchCurentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state,action){
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },


    [fetchCurentUser.fulfilled](state,action){
      state.user = action.payload;
      
      state.isLoggedIn = true;
    },    
  },
});
export const authReducer = authSlice.reducer;
