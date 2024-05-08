import {RootState} from 'src/store'

export const selectUser = (state: RootState) => state.auth.user
export const selectNotification = (state: RootState) => state.auth.notification
export const selectIsAuthenticate = (state: RootState) => state.auth.isAuthenticate