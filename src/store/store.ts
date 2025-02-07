import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "../features/graphSlice";
import colorReducer from "../features/colorSlice";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    color: colorReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch