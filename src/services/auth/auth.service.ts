import {baseApi} from "../baseApi.ts";
import {
    EmailType,
    LoginArgsType,
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
        //Восстановление пароля
        //TODO временно вместо void messageType
        recoverPassword: builder.mutation<{message: string}, EmailType>({
            query: body => ({
                url: '/user/recovery',
                method: 'POST',
                body,
            }),
        }),
    })
})

export const {useCurrentQuery, useLoginMutation, useRegisterMutation, useRecoverPasswordMutation} = authService