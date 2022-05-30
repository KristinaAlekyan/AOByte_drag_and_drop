import { configureStore } from "@reduxjs/toolkit";
import dragAndDropSlice from "./dragAndDropSlice";

export const store = configureStore({
  reducer: {
    dragAndDropSlice: dragAndDropSlice,
  },
});

export default store;