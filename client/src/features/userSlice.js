import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

// Define the initial state using jwtToken from localStorage if available
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem('jwtToken')
      ? jwtDecode(localStorage.getItem('jwtToken'))
      : null, // Decode the JWT token to get user information if token exists
    isLoading: true,
  },

  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem('jwtToken', action.payload.token); // Save JWT token to localStorage on login
      state.userInfo = action.payload; // Update state with user info and loading status from action payload
      state.isLoading = action.payload.loading;
    },
    logoutUser: (state, action) => {
      localStorage.removeItem('jwtToken'); // Remove JWT token from localStorage on logout
      state.userInfo = null; // Reset user info to null
    },

    updateUser: (state, action) => {
      localStorage.setItem('jwtToken', action.payload.token); // Update JWT token in localStorage
      state.userInfo = action.payload; // Update user info in state
    },
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions; // Export actions for use in components
export default userSlice.reducer; // Export reducer for store configuration
