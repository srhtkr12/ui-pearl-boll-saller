import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';
import { toast } from "react-toastify";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Users
        getAllUsers: builder.query({
            query: () => `users`,
        }),
        // Get USer By ID
        getUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
        // Add New User
        addNewUser: builder.mutation({
            query: (payload) => ({
                url: 'users/register',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Login User
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: 'users/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            onSuccess: (data, variables, context) => {
                toast.success('Logged in successfully.')
            },
            onError: (error, variables, context) => {
                toast.error('Login Failed!')
            },
        }),
        // Edit User
        editUser: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `users/edit/${id}`,
                method: 'PATCH',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        // Delete User
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUserByIdQuery,
    useEditUserMutation,
    useLoginUserMutation,
    useDeleteUserMutation,
    useAddNewUserMutation,
} = usersApi;