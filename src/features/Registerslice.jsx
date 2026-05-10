import { createSlice } from "@reduxjs/toolkit";

const Registerslice = createSlice({
  name: "reguser",
  initialState: {
    reguser: JSON.parse(localStorage.getItem("reguser")) || [],
  },
  reducers: {
    setUser: (state, action) => {
      state.reguser = action.payload;
    },
  },
});

export const { setUser } = Registerslice.actions;

export default Registerslice.reducer;
