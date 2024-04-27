/*
Маршруты приложения
 */
export const PathConstant = {
    PRIVATE_ROUTES: {
        MAIN_PAGE: '/',
        CREATE_NEW_PASSWORD_PAGE: '/api/user/create-new-password/:token',
        // GET_ALL_BOTS: '/api/bot',
        // CREATE_BOT: '/api/bot/add',
        // DELETE_BOT: '/api/bot/remove/:id',
        // FIND_BOT: '/api/bot/find/:id',
    },
    PUBLIC_ROUTES: {
        AUTH: '/api',
        SIGN_IN_PAGE: '/api/user/login',
        SIGN_UP_PAGE: '/api/user/register',
        RECOVERY_PASSWORD: '/api/user/recovery-password',
        CHECK_EMAIL_PAGE: '/api/user/check-email-notification',
        SUCCESS_RESET_PASSWORD_PAGE: '/api/user/success-reset-password-notification',
        SUCCESS_SIGN_UP_PAGE: '/api/user/success-sign-up-notification',
    },
    ERROR_PAGE: '/404',
} as const