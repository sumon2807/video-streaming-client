import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

export default counterSlice;
export const { increment, decrement } = counterSlice.actions;
