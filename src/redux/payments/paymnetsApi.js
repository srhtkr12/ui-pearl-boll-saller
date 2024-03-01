import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const paymentsApi = createApi({
    reducerPath: 'paymentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        getAllPayments: builder.query({
            query: () => `paymnets`,
        }),
        createProduct: builder.mutation({
            query: (newPayment) => ({
                url: 'payments',
                method: 'POST',
                body: newPayment,
            }),
        }),
    }),
})

export const { useGetAllPaymentsQuery, useCreateProductMutation } = paymentsApi;