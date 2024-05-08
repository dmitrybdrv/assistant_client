import {CreateNewPasswordPage, RecoveryPasswordPage, MainPage, SignInPage, SignUpPage} from 'src/pages'
import {createBrowserRouter, Navigate, RouteObject} from 'react-router-dom'
import {PathConstant} from './path.ts'
import App from 'src/app/App.tsx'
import {
    CheckEmail,
    ErrorPage,
    Layout,
    SuccessResetPassword, SuccessSignUp,
} from 'src/components'

const publicRoutes: RouteObject[] = [
   {
                path: PathConstant.PUBLIC_ROUTES.AUTH,
                element: <Layout />,
                children: [
                    {
                        path: PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE,
                        element: <SignInPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SIGN_UP_PAGE,
                        element: <SignUpPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.RECOVERY_PASSWORD,
                        element: <RecoveryPasswordPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.CHECK_EMAIL_PAGE,
                        element: <CheckEmail />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD_PAGE,
                        element: <SuccessResetPassword />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SUCCESS_SIGN_UP_PAGE,
                        element: <SuccessSignUp />,
                    },
                ],
            },
]

const privateRoutes: RouteObject[] = [
    {
        path: PathConstant.PRIVATE_ROUTES.MAIN_PAGE,
        element: <Layout />,
        children: [
            {
                path: PathConstant.PRIVATE_ROUTES.CREATE_NEW_PASSWORD_PAGE,
                element: <CreateNewPasswordPage />,
            },
            {
                path: PathConstant.PRIVATE_ROUTES.MAIN_PAGE,
                element: <MainPage/>
             },
        ],
    },
]

export const router = createBrowserRouter([
    {
        path: PathConstant.PRIVATE_ROUTES.MAIN_PAGE,
        element: <App />,
        children: [...publicRoutes, ...privateRoutes],
    },
    {
        path: PathConstant.ERROR_PAGE,
        element: <ErrorPage/>,
    },
    {
        path: '*',
        element: <Navigate to={PathConstant.ERROR_PAGE} />,
    },
])
