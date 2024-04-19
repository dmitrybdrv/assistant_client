import { configureStore } from '@reduxjs/toolkit'
import auth from 'src/features/authSlice/auth.slice.ts'
import app from 'src/features/appSlice/app.slice.ts'
import email from 'src/features/emailSlice/email.slice.ts'
import {baseApi} from 'src/services'
import {listenerMiddleware} from 'src/common/middleware/auth.ts'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth,
        app,
        email,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware).prepend(listenerMiddleware.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch