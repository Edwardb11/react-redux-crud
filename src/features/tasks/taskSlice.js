import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the Redux store. */
export const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {},
});

export default taskSlice.reducer;
