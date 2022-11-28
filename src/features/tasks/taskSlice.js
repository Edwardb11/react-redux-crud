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
  initialState,
  reducers: {
    addTask: (state, action) => {
      /* Adding the new task to the state. */
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
