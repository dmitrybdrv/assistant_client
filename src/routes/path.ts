/*
Маршруты приложения
 */
export const PathConstant = {
    PRIVATE_ROUTES: {
        HOME: '/',
        // GET_ALL_BOTS: '/api/bot',
        // CREATE_BOT: '/api/bot/add',
        // DELETE_BOT: '/api/bot/remove/:id',
        // FIND_BOT: '/api/bot/find/:id',
    },
    ERROR_PAGE: '/404',
    PUBLIC_ROUTES: {
        AUTH: '/auth',
        SIGN_IN: '/auth/sign-in',
        SIGN_UP: '/auth/sign-up',
        FORGOT_PASSWORD: '/auth/forgot-password-form',
        CREATE_NEW_PASSWORD: '/auth/create-new-password-form/:token',
        CHECK_EMAIL: '/auth/check-email-notification',
        SUCCESS_RESET_PASSWORD: '/auth/success-reset-password-notification',
        SUCCESS_SIGN_UP: '/auth/success-sign-up-notification',
    }
} as const