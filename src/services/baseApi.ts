import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react'
import {RootState} from 'src/store'


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth?.user?.token || localStorage.getItem('token')

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
    credentials: 'include'
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    tagTypes: ['Company'],
    endpoints: () => ({})
})