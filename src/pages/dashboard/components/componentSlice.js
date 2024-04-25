import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerVis: false,
  projectPop: false,
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    updateDrawerState: (state, action) => {
      console.log(action.payload);
      state.drawerVis = action.payload;
    },
    updateProjectPop: (state, action) => {
      console.log(action.payload);
      state.projectPop = action.payload;
    },
    updateAllpop: (state, action) => {
      console.log(action.payload);
      state.projectPop = action.payload;
    },
  },
});
export const { updateDrawerState, updateProjectPop, updateAllpop } =
  componentSlice.actions;

export default componentSlice.reducer;
