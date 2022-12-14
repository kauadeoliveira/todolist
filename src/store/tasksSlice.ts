import { createSlice } from "@reduxjs/toolkit";

export type TaskTypes = {
    title: string;
    date: string
    description?: string;
    priority: 'high' | 'middle' | 'low';
    completed: boolean;
}

interface TasksInitialState {
    allTasks: TaskTypes[]
}

const initialState: TasksInitialState = {
    allTasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.allTasks.push(action.payload)
        }
    }
})