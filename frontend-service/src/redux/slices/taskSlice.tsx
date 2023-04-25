import { Slice, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

const initialState: {
    tasks: ITask[],
} = {
    tasks: [],
};

const taskSlice: Slice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTasks: (state, { payload }) => {
            state.tasks = payload;
        },
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        },
        updateTask: (state, { payload }) => {
            const index = state.tasks.findIndex((task: ITask) => task._id === payload.id);
            state.tasks[index] = { ...payload.data };
        },
        updateTaskStatus: (state, { payload }) => {
            const index = state.tasks.findIndex((task: ITask) => task._id === payload.id);
            state.tasks[index].status = payload.status;
        },
        deleteTaskRedux: (state, { payload }) => {
            state.tasks.filter((task: ITask) => task._id !== payload);
        }
    }
});

export const {
    setTasks,
    updateTask,
    updateTaskStatus,
    deleteTaskRedux,
    addTask
} = taskSlice.actions;

export default taskSlice.reducer;