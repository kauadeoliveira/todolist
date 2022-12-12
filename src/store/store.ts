import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './modalSlice'
import { tasksSlice } from './tasksSlice'

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        tasks: tasksSlice.reducer
    }
})