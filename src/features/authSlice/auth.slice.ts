import {createSlice} from '@reduxjs/toolkit'
import {MessageFromBack, UserData} from 'src/types'
import {authService} from 'src/services'
import {produce} from 'immer'

type InitialState = {
    user: UserData
    isAuthenticate: boolean
    notification: MessageFromBack | null
}

const initialState: InitialState = {
    user: {} as UserData,
    isAuthenticate: false,
    notification: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearUserData: (state) => {
            state.user = {} as UserData
            state.isAuthenticate = false
            localStorage.removeItem('token')
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(authService.endpoints.login.matchFulfilled, (state, action) => {
                const {token, message} = action.payload
                return produce(state, (draftState) => {
                    draftState.user = {...draftState.user, token}
                    draftState.notification = {...draftState.notification, message}
                    draftState.isAuthenticate = true
                })
            })
            .addMatcher(authService.endpoints.register.matchFulfilled, (state, action) => {
                const {message} = action.payload
                return produce(state, (draftState) => {
                    draftState.notification = {...draftState.notification, message}
                })
            })
            .addMatcher(authService.endpoints.current.matchFulfilled, (state, action) => {
                //const {name, email, createdReviewerBot, token} = action.payload
                return produce(state, (draftState) => {
                    draftState.user = {...action.payload}
                    draftState.isAuthenticate = true
                })
            })
            .addMatcher(authService.endpoints.recoverPassword.matchFulfilled, (state) => {
                state.isAuthenticate = true
            })
    }
})

export default slice.reducer
export const authAction = slice.actions

