import {baseApi} from '../baseApi.ts'
import {
    EmailType,
    LoginArgsType, MessageFromBack,
    RegisterArgsType,
    ResponseUserData,
} from 'src/types'

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
        //Аутентификация пользователя (UserData)
        current: builder.query<ResponseUserData, void>({
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
               method: 'POSt',
               body
           })
        }),
    })
})

export const {
    useCurrentQuery,
    useLoginMutation,
    useRegisterMutation,
    useRecoverPasswordMutation,
    useCreateNewPassMutation,
} = authService