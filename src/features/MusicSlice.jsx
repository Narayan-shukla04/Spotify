import { createSlice } from "@reduxjs/toolkit";

let MusicSlice = createSlice({
  name: "songs",
  initialState: {
    currentSong:null ,
    isPlaying: false,
  },
  reducers: {
    setSong: (state,actions) => {
      state.currentSong=actions.payload,
      state.isPlaying=true
    },

    setPlay: (state) => {
      state.isPlaying = true;
    },
    setPause: (state) => {
      state.isPlaying = false;
    },
  },
});

export let { setSong, setPause, setPlay } = MusicSlice.actions;

export default MusicSlice.reducer;
