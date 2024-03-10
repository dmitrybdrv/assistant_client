import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {MainPage, SignInPage, SignUpPage} from "../pages";
import {
    CheckEmail,
    CreateNewPassword,
    ForgotPassword,
    Layout,
    SuccessResetPassword,
    SuccessSignUp,
} from "../components";
import App from "../app/App.tsx";
import {PathConstant} from "./path.ts";


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
                        element: <CreateNewPassword />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.CHECK_EMAIL,
                        element: <CheckEmail />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD,
                        element: <SuccessResetPassword />,
                    },
                    {
                        path: PathConstant.PUBLIC_ROUTES.SUCCESS_SIGN_UP,
                        element: <SuccessSignUp />,
                    },
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
        element: <div>Error component</div>,
    },
    {
        path: '*',
        element: <Navigate to={PathConstant.ERROR_PAGE} />,
    },
]);
