import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'

function Copyright(props) {
    return (
        <Typography textDecoration='none' variant="body2" color="#fff" align="center" {...props}>
            {'Copyright © '}
            Piggibag{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const SellerFooter = () => {
    return (
        <Grid>
            <Divider />
            <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
            </Grid>
            <Copyright sx={{ py: 2, m: 0, backgroundColor: '#416aa3' }} />
        </Grid>
    )
}