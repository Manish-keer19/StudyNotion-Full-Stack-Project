import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: localStorage.getItem("token") || null, // Initialize from localStorage if available
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", action.payload); // Save token to localStorage
        Cookies.set("token", action.payload);
      }
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token"); // Clear token from localStorage
      Cookies.remove("token");
    },
  },
});

export const { setToken, logout } = authslice.actions;
export default authslice.reducer;
