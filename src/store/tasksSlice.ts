import { createSlice } from "@reduxjs/toolkit";

export type Tasks = {
    title: string;
    description?: string;
    priority: 'high' | 'middle' | 'low';
    completed: boolean;
}

interface TasksInitialState {
    allTasks: Tasks[]
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