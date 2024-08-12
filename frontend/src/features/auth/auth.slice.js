import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,  // Initialize from localStorage if available
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("action.payload",action.payload)
      state.token = action.payload;
      localStorage.setItem("token", action.payload);  // Save token to localStorage
    },
  },
});

export const { setToken } = authslice.actions;
export default authslice.reducer;
