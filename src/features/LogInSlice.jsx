import { createSlice } from "@reduxjs/toolkit";

let LogInSlice = createSlice({
  name: "userloggin",
  initialState: {
    loggedinUser: JSON.parse(localStorage.getItem("loginUser"))||null
  },
  reducers: {
    setLoginUser: (state, action) => {
      state.loggedinUser = action.payload;
    },
  },
});

export let { setLoginUser } = LogInSlice.actions;

export default LogInSlice.reducer;
