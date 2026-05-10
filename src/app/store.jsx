import { configureStore } from "@reduxjs/toolkit";
import Register from "../features/Registerslice";
import LoginUser from "../features/LogInSlice";
import music from "../features/MusicSlice";

export const store = configureStore({
  reducer: {
    regUser: Register,
    loginUser: LoginUser,
    song: music,
  },
});
