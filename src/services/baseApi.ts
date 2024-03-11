import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//Базовый эндпоинт
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'https://localhost:8000/',
        credentials: 'include'
    }),
    tagTypes: ['Me'],
    endpoints: () => ({}),
})