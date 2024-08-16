import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/auth.slice";
import Profilereducer from "../features/Profile/profileslice";

export const store = configureStore({
  reducer: {
    auth: authreducer,
    profile: Profilereducer,
  },
});
