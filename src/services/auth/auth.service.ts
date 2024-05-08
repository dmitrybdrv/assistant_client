import {baseApi} from '../baseApi.ts'
import {
    EmailType,
    LoginArgsType, MessageFromBack,
    RegisterArgsType,
    ResponseLoginUserData, UserData,
} from 'src/types'

export const authService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //Логинизация
        login: builder.mutation<ResponseLoginUserData, LoginArgsType>({
            query: data => ({
                url: '/user/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),
        //Регистрайция
        register: builder.mutation<MessageFromBack, RegisterArgsType>({
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
                url: '/user/recovery-password',
                method: 'POST',
                body,
            }),
        }),
        //Создание нового пароля
        createNewPass: builder.mutation<MessageFromBack, {password: string}>({
           query: body => ({
               url: '/user/create-new-password',
               method: 'POST',
               body
           })
        }),
        //Вылогинивание
        logout: builder.mutation<MessageFromBack, void>({
            query: () => ({
                url: '/user/logout',
                method: 'POST'
            }),
            invalidatesTags: ['User']
        })
    })
})

export const {
    useCurrentQuery,
    useLoginMutation,
    useRegisterMutation,
    useRecoverPasswordMutation,
    useCreateNewPassMutation,
    useLogoutMutation,
} = authService