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
    completeTasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.incompleteTasks.push(action.payload);
        },
        completeTask: (state, action) => {
            const completeState = state.incompleteTasks.map(task => {
                if(task.id === action.payload){
                    state.completeTasks.push({...task, completed: true})
                }
            })
            
            const removeCompleteTask = state.incompleteTasks.filter(task => task.id === action.payload ? false : true);
            state.incompleteTasks = removeCompleteTask; 
        },
        incompleteTask: (state, action) => {
            const incompleteState = state.completeTasks.map(task => {
                if(task.id === action.payload){
                    state.incompleteTasks.push({...task, completed: false})
                }
            }) 

            const removeIncompleteTask = state.completeTasks.filter(task => task.id === action.payload ? false : true);
            state.completeTasks = removeIncompleteTask; 
        }
    }
})