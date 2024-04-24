import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../pages/login/registerSlice";
export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
