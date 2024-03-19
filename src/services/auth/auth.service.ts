import {baseApi} from "../baseApi.ts";
import {LoginArgsType, RegisterArgsType, ResponseUserData, UserData} from "../../types";

export const authService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseUserData, LoginArgsType>({
            query: data => ({
                url: '/user/login',
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation<ResponseUserData, RegisterArgsType>({
            query: data => ({
                url: '/user/register',
                method: 'POST',
                body: data
            })
        }),
        current: builder.query<UserData, void>({
            query: () => ({
                url: '/user/current',
                method: 'GET',
            })
        })
    })
})

export const {useCurrentQuery, useLoginMutation, useRegisterMutation} = authService

export const {endpoints: {login, register, current}} = authService