import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";

import {PathConstant} from "./path.ts";
import App from "src/app/App.tsx";
import {CreateNewPasswordPage, MainPage, SignInPage, SignUpPage} from "src/pages";
import {
    CheckEmail,
    ErrorPage,
    ForgotPassword,
    Layout,
    SuccessResetPassword,
} from "src/components";

const publicRoutes: RouteObject[] = [
   {
                path: PathConstant.PUBLIC_ROUTES.AUTH,
                element: <Layout />,
                children: [
                    {
                        path: PathConstant.PUBLIC_ROUTES.SIGN_IN,
                        element: <SignInPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SIGN_UP,
                        element: <SignUpPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.FORGOT_PASSWORD,
                        element: <ForgotPassword />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.CREATE_NEW_PASSWORD,
                        element: <CreateNewPasswordPage />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.CHECK_EMAIL,
                        element: <CheckEmail />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD,
                        element: <SuccessResetPassword />,
                    },
                    // {
                    //     path: PathConstant.PUBLIC_ROUTES.SUCCESS_SIGN_UP,
                    //     element: <SuccessSignUp />,
                    // },
                ],
            },
]

const privateRoutes: RouteObject[] = [
    {
        path: PathConstant.PRIVATE_ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: PathConstant.PRIVATE_ROUTES.HOME,
                element: <MainPage/>
             },
        ],
    },
];

export const router = createBrowserRouter([
    {
        path: PathConstant.PRIVATE_ROUTES.HOME,
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
]);
