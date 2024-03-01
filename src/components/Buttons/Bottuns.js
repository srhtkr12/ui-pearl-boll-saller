import { Box, Button } from '@mui/material'
import React from 'react'

export const Buttons = ({ type, name, color, size }) => {
    return (
        <Box>
            <Button type={type}>{name}</Button>
        </Box>
    )
}
