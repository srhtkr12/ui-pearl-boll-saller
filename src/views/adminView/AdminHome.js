import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const SellerHome = () => {
    return (
        <Grid sx={{ p: 1, minHeight: '100%', minWidth: '100%' }}>
            <Box sx={{ p: 2, backgroundColor: '#6699CC' }}>
                <Box>
                    <Typography>Saler Name</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Box>
                        <Typography>Total Products</Typography>
                        {100}
                    </Box>
                    <Box>
                        <Typography>Total Total Orders</Typography>
                        {10}
                    </Box>
                    <Box>
                        <Typography>Payble Blance</Typography>
                        {2500}
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
export default SellerHome