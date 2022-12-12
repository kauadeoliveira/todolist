import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    allTasks: {
        title: string;
        description?: string;
        priority: 'high' | 'middle' | 'low';
        completed: boolean;
    }[]
}

const initialState: InitialState = {
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