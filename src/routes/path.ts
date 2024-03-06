/*
Маршруты приложения
 */
export const PathConstant = {
    PRIVATE_ROUTES: '/',
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
}