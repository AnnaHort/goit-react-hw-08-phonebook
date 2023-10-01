import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
import { logIn } from './operations';
import { logOut } from './operations';

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
      state.user = '';
      state.token = '';
      state.isLoggedIn = false;
    }
  },
});
export const authReducer = authSlice.reducer;
