import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter";
//set up redux store
const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
