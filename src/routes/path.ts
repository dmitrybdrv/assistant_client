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
        AUTH: '/api',
        SIGN_IN: '/api/user/login',
        SIGN_UP: '/api/sign-up',
        FORGOT_PASSWORD: '/api/forgot-password-form',
        CREATE_NEW_PASSWORD: '/api/create-new-password-form/:token',
        CHECK_EMAIL: '/api/check-email-notification',
        SUCCESS_RESET_PASSWORD: '/api/success-reset-password-notification',
        SUCCESS_SIGN_UP: '/api/success-sign-up-notification',
    }
} as const