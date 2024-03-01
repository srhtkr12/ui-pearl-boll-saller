import React from 'react'
import { Container } from '@mui/material'
import { OrderProtectedRoute } from '../../routes/ProtectedRoute'

const Order = () => {
    return (
        <Container sx={{ py: 1 }}>
            <OrderProtectedRoute />
        </Container>
    )
}

export default Order