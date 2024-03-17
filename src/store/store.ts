import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/authSlice/auth.slice.ts'
import app from '../features/appSlice/app.slice.ts'
import {baseApi} from "../services/baseApi.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth,
        app
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch