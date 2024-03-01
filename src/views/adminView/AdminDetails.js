import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const AdminDetails = () => {
    return (
        <Grid sx={{ p: 1, minHeight: '100%', minWidth: '100%' }}>
            <Box sx={{ p: 2, backgroundColor: '#6699CC' }}>
                <Box sx={{ pb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                </Box>
                <Divider />
                <Typography>Admin Profile</Typography>
            </Box>
        </Grid>
    )
}

export default AdminDetails