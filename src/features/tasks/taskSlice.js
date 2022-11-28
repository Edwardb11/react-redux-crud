import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description:"description",

    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description:"description",
    completed: false,
  },
];
/* Creating a slice of the Redux store. */
export const taskSlice = createSlice({
  name: "task",
  initialState:initialState,
  reducers: {},
});

export default taskSlice.reducer;
