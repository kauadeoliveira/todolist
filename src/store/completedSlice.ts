import { createSlice } from "@reduxjs/toolkit";
import { TaskTypes } from "./tasksSlice";

interface CompletedInitialState {
    allCompleted: TaskTypes[]
}

const initialState: CompletedInitialState = {
    allCompleted: []
}

// const completedSlice = createSlice({
//     name: 'completed',
//     initialState,
//     reducers{

//     }
// })