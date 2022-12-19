import { createSlice } from "@reduxjs/toolkit";

export interface TaskTypes{
    title: string;
    id: number;
    date: string
    priority: 'high' | 'middle' | 'low';
    completed: boolean;
}

interface TasksInitialState {
    [task: string]: TaskTypes[]
}

const initialState: TasksInitialState = {
    incompleteTasks: [],
    completedTasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.incompleteTasks.push(action.payload)
        },
        removeTask: (state, action) => {
            const removeCompleted = state.incompleteTasks.filter(task => task.id === action.payload ? false : true);
            const addCompleted = state.incompleteTasks.map(task => task.id === action.payload ? state.completedTasks.push(task) : false)
            state.incompleteTasks = removeCompleted 
        }
    }
})