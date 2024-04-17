import {baseApi} from "../baseApi.ts";
import {
    EmailType,
    LoginArgsType, MessageFromBack,
    RegisterArgsType,
    ResponseUserData,
    UserData
} from "src/types";

export const authService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //Логинизация
        login: builder.mutation<ResponseUserData, LoginArgsType>({
            query: data => ({
                url: '/user/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),
        //Регистрайция
        register: builder.mutation<ResponseUserData, RegisterArgsType>({
            query: data => ({
                url: '/user/register',
                method: 'POST',
                body: data
            })
        }),
        //Аутентификация пользователя
        current: builder.query<UserData, void>({
            query: () => ({
                url: '/user/current',
                method: 'GET',
            }),
            providesTags: ['User']
        }),
        //Восстановление пароля, сброс пароля на почту
        recoverPassword: builder.mutation<MessageFromBack, EmailType>({
            query: body => ({
                url: '/user/forgot-password',
                method: 'POST',
                body,
            }),
        }),
        //Создание нового пароля
        createNewPass: builder.mutation<MessageFromBack, {password: string, token: string}>({
            query: data => ({
                url: `/user/create-new-password`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
                data: data.password,
            })
        })
    })
})

export const {
    useCurrentQuery,
    useLoginMutation,
    useRegisterMutation,
    useRecoverPasswordMutation,
    useCreateNewPassMutation,
} = authService