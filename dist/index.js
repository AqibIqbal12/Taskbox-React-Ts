import { createSlice, configureStore } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";
const tasksSlice = createSlice({
    name: "tasks",
    initialState: INITIAL_STATE,
    reducers: {
        addTask: (state, action) => {
            return [action.payload, ...state];
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id);
        }
    }
});
const store = configureStore({ reducer: tasksSlice.reducer });
export const { addTask, removeTask } = tasksSlice.actions;
export { tasksSlice, store };
