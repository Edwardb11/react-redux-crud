import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "description",

    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "description",
    completed: false,
  },
];
/* Creating a slice of the Redux store. */
export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      /* Adding the new task to the state. */
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
