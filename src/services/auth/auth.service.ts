import {baseApi} from "../baseApi.ts";
import {LoginArgs, LoginResponse} from "./auth.types.ts";

export const authService = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<LoginResponse, LoginArgs>({
        query: data => ({
            url: '/api/user/login',
            method: 'POST',
            body: data
        }),
            //invalidatesTags: ['Me']
        })
    })
})

export const {useLoginMutation} = authService