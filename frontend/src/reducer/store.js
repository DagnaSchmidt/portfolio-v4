import { configureStore } from "@reduxjs/toolkit";

//reducers
import pageReducer from "./pageReducer";

export const store = configureStore({
  reducer: {
    pages: pageReducer
  },
});
