import {baseApi} from "../baseApi.ts";
import {LoginArgsType, RegisterArgsType, ResponseUserData, UserData} from "../../types";

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
        current: builder.query<UserData, string>({
            query: (token) => ({
                url: '/user/current',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            providesTags: ['User']
        })
    })
})

export const {useCurrentQuery, useLoginMutation, useRegisterMutation} = authService