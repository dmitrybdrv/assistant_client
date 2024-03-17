import {ResponseUserData} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services/auth";
import {RootState} from "../../store";

type InitialState = {
    user: ResponseUserData | null
    isAuthenticate: boolean
}

const initialState: InitialState = {
    user: null,
    isAuthenticate: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: builder => {
        builder
            .addMatcher(authService.endpoints.login.matchFulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticate = true
            })
            .addMatcher(authService.endpoints.register.matchFulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticate = true
            })
            .addMatcher(authService.endpoints.current.matchFulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticate = true
            })
    }
})

export default slice.reducer
export const {logout} = slice.actions

//TODO вынести селекты в отдельный фаил
export const selectIsAuthenticate = (state: RootState) => state.auth.isAuthenticate
export const selectUser = (state: RootState) => state.auth.user

