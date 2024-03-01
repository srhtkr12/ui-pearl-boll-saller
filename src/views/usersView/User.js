import React from 'react'
import { Container } from '@mui/material'
import { UserProtectedRoute } from '../../routes/ProtectedRoute'

const User = () => {
    return (
        <Container sx={{ py: 1 }}>
            <UserProtectedRoute />
        </Container>
    )
}

export default User