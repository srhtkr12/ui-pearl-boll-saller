import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const adminsApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Sellers
        getAllAdmins: builder.query({
            query: () => `admin`,
        }),
        // Get Seller By ID
        getAdminById: builder.query({
            query: (id) => `admin/${id}`,
        }),
        // Add New Sellers
        addNewAdmin: builder.mutation({
            query: (payload) => ({
                url: 'admin',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Seller Login
        loginAdmin: builder.mutation({
            query: (credentials) => ({
                url: 'admin/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Edit Seller
        editAdmin: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `admin/edit/${id}`,
                method: 'PATCH',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Delete Seller
        deleteAdmin: builder.mutation({
            query: (id) => ({
                url: `admin/delete/${id}`,
                method: 'DELETE'
            }),
        }),
    }),
});

export const {
    useGetAllAdminsQuery,
    useGetAdminByIdQuery,
    useAddNewAdminMutation,
    useLoginAdminMutation,
    useEditAdminMutation,
    useDeleteAdminMutation
} = adminsApi;

