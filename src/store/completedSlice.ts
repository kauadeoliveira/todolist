import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "./tasksSlice";

interface CompletedInitialState {
    allCompleted: Tasks[]
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