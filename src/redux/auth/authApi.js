import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const authApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        isAuth: builder.query({
            query: () => `users`,
        }),
        logOut: builder.query({
            query: () => `users`,
        }),
    }),
});

export const { useIsAuthQuery, useLogOutQuery } = authApi;