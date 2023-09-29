import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [logIn.fulfilled](state, action){

        }
    }
})