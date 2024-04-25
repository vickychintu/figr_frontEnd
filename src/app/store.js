import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../pages/login/registerSlice";
import snakBarReducer from "../snakBarSlice";
import componentReducer from "../pages/dashboard/components/componentSlice";
import dashReducer from "../pages/dashboard/dashSlice";
export const store = configureStore({
  reducer: {
    register: registerReducer,
    snakBar: snakBarReducer,
    component: componentReducer,
    dash: dashReducer,
  },
});
