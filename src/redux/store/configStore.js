import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter";
const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
