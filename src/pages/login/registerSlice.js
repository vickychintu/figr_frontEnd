import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailStatus: true,
  passdStatus: true,
  passdMatch: true,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    regStateUpdate: (state, action) => {
      console.log(action.payload);
      state.emailStatus = action.payload.emailStatus;
      state.passdStatus = action.payload.passdStatus;
      state.passdMatch = action.payload.passdMatch;
    },
  },
});
export const { regStateUpdate } = registerSlice.actions;

export default registerSlice.reducer;
