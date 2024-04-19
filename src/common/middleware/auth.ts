import {createListenerMiddleware} from '@reduxjs/toolkit'
import {authService} from 'src/services'

/**
 * middleWare для записи в localStorage токена пользователя после логинизации
 */
export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: authService.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners()

        if(action.payload.token) {
            localStorage.setItem('token', action.payload.token)
        }
    }
})