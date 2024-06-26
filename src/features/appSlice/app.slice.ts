import {Action, createSlice} from '@reduxjs/toolkit'
import {LoadingState} from 'src/types'

export type InitialStateType = {
    isLoading: LoadingState
    notifications: string | null
}

const initialState: InitialStateType = {
    isLoading: 'idle',
    notifications: null
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(
                (action: Action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = 'loading'
                }
            )
            .addMatcher(
                (action: Action) => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.isLoading = 'success'
                    state.notifications = 'Ok'
                }
            )
            .addMatcher(
                (action: Action) => action.type.endsWith('/rejected'),
                (state) => {
                    state.isLoading = 'idle'
                    state.notifications = 'ERROR'
                }
            )
    }
})

export default slice.reducer