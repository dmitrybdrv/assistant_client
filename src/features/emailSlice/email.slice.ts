import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "src/store";

interface EmailState {
    value: string
}
const initialState: EmailState = {
    value: '',
}

const slice = createSlice({
    name: 'emailSlice',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export default slice.reducer

export const emailActions = slice.actions
export const userEmailSelector = (state: RootState) => state.email.value
