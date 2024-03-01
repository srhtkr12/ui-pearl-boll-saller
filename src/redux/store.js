import { configureStore } from '@reduxjs/toolkit' //'@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ordersApi } from './orders/ordersApi'
import { usersApi } from '../redux/users/usersApi'
import { paymentsApi } from './payments/paymnetsApi'
import { productsApi } from './products/productsApi'
import { sellersApi } from '../redux/sellers/sellersApi'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [sellersApi.reducerPath]: sellersApi.reducer,
        [paymentsApi.reducerPath]: paymentsApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            usersApi.middleware,
            ordersApi.middleware,
            sellersApi.middleware,
            productsApi.middleware,
            paymentsApi.middleware,
        ]),
})

setupListeners(store.dispatch)