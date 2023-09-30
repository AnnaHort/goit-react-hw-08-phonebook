import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

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
        state.authReduser.user = action.payload.user;
        state.authReduser.token = action.payload.token;
        state.authReduser.isLoggedIn = true;
    },
  },
});
export const authReducer = authSlice.reducer;
