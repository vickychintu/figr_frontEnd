import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerVis: false,
  projectPop: false,
  colorPop: false,
  radiusPop: false,
  spacePop: false,
  buttonPop: false,
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
    updateColor: (state, action) => {
      state.colorPop = action.payload;
    },
    updateRadius: (state, action) => {
      state.radiusPop = action.payload;
    },
    updateSpace: (state, action) => {
      state.spacePop = action.payload;
    },
    updateButton: (state, action) => {
      state.buttonPop = action.payload;
    },
    updateAllpop: (state, action) => {
      console.log(action.payload);
      state.projectPop = action.payload;
      state.colorPop = action.payload;
      state.radiusPop = action.payload;
      state.spacePop = action.payload;
      state.buttonPop = action.payload;
    },
  },
});
export const {
  updateDrawerState,
  updateProjectPop,
  updateAllpop,
  updateColor,
  updateRadius,
  updateSpace,
  updateButton,
} = componentSlice.actions;

export default componentSlice.reducer;
