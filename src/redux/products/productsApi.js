import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Products
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        // Get Product BY Id
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        // Add New Product
        createProduct: builder.mutation({
            query: (payload) => ({
                url: 'products',
                method: 'POST',
                body: payload,
            }),
        }),
        // Edit Product
        editProduct: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `products/edit/${id}`,
                method: 'PATCH',
                body: payload,
            }),
        }),
        // Delete Product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useDeleteProductMutation
} = productsApi;