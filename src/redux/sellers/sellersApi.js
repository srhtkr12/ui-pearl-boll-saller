import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';
import { toast } from "react-toastify";

export const sellersApi = createApi({
    reducerPath: 'sellersApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Sellers
        getAllSellers: builder.query({
            query: () => `sellers`,
        }),
        // Get Seller By ID
        getSellerById: builder.query({
            query: (id) => `sellers/${id}`,
        }),
        // Add New Sellers
        addNewSeller: builder.mutation({
            query: (payload) => ({
                url: 'sellers/register',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Seller Login
        loginSeller: builder.mutation({
            query: (credentials) => ({
                url: 'seller/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            onSuccess: (message) => {
                toast.success('Login successful!');
            },
            onError: (error) => {
                toast.error(`Login failed: ${error.message}`);
            },
        }),
        // Edit Seller
        editSeller: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `seller/edit/${id}`,
                method: 'PATCH',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Delete Seller
        deleteSeller: builder.mutation({
            query: (id) => ({
                url: `seller/delete/${id}`,
                method: 'DELETE'
            }),
        }),
    }),
});

export const {
    useGetAllSellersQuery,
    useGetSellerByIdQuery,
    useAddNewSellerMutation,
    useLoginSellerMutation,
    useEditSellerMutation,
    useDeleteSellerMutation
} = sellersApi;

