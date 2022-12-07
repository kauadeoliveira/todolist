import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    openModal: boolean
}

const initialState: initialState = {
    openModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.openModal = !state.openModal
        }
    }
})