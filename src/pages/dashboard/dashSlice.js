import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  prjNameStatus: true,
  prjDesStatus: true,
  allPrj: [],
  currentPrjId: "",
  currentPrjNo: 1,
  allColor: [],
  allRadius: [],
  allSpace: [],
  allButtons: [],
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
      console.log(action.payload.prjId);
      state.currentPrjNo = action.payload.prjNo;
      state.currentPrjId = action.payload.prjId;
    },
    setAllStyle: (state, action) => {
      state.allColor = action.payload.color;
      state.allRadius = action.payload.radius;
      state.allSpace = action.payload.space;
    },
    setAllComp: (state, action) => {
      state.allButtons = action.payload;
    },
  },
});
export const {
  prjStateUpdate,
  setAllPrj,
  setCurrentPrj,
  setAllStyle,
  setAllComp,
} = dashSlice.actions;

export default dashSlice.reducer;
