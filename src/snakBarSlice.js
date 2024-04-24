import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snakBarOpen: false,
  snakBarMessage: "",
};

export const snakBarSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateSnakMsg: (state, action) => {
      console.log(action.payload);
      state.snakBarMessage = action.payload;
    },
    updateSnakState: (state, action) => {
      console.log(action.payload);
      state.snakBarOpen = action.payload;
    },
  },
});
export const { updateSnakMsg, updateSnakState } = snakBarSlice.actions;

export default snakBarSlice.reducer;
