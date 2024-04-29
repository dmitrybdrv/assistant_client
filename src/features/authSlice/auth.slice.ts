import {createSlice} from '@reduxjs/toolkit'
import {ResponseUserData} from 'src/types'
import {authService} from 'src/services'
import {RootState} from 'src/store'

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
        logout: (state) => {
            state.user = null
            state.isAuthenticate = false
            localStorage.removeItem('token')
        }
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
                //TODO дописать логику
                state.user = action.payload
                state.isAuthenticate = true
            })
            .addMatcher(authService.endpoints.recoverPassword.matchFulfilled, (state) => {
                state.isAuthenticate = true
            })
    }
})

export default slice.reducer
export const authAction = slice.actions

//TODO вынести селекты в отдельный фаил
export const selectIsAuthenticate = (state: RootState) => state.auth.isAuthenticate


