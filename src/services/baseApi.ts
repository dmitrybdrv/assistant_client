import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    // prepareHeaders: (headers, {getState}) => {
    //     const token = (getState() as RootState).auth
    // }
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    tagTypes: ['User'],
    endpoints: () => ({})
})