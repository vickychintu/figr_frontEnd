import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  prjNameStatus: true,
  prjDesStatus: true,
  allPrj: [],
  currentPrjId: "",
  currentPrjNo: 1,
};

export const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    prjStateUpdate: (state, action) => {
      console.log(action.payload);
      state.prjNameStatus = action.payload.prjNameStatus;
      state.prjDesStatus = action.payload.prjDesStatus;
    },
    setAllPrj: (state, action) => {
      //   action.payload.map((x) => {
      //     state.allPrj.push(x);
      //   });
      state.allPrj = action.payload;
    },
    setCurrentPrj: (state, action) => {
      state.currentPrjNo = action.payload.prjNo;
      state.currentPrjId = action.payload.prjId;
    },
  },
});
export const { prjStateUpdate, setAllPrj, setCurrentPrj } = dashSlice.actions;

export default dashSlice.reducer;
