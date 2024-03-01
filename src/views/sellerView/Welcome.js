import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import { SellerFooter } from '../../components/sellers/SellerFooter'

const Welcome = () => {
    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid xs={8} sx={{
                    p: 0,
                    m: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100%',
                    backgroundColor: '#FEF8DD'
                }}>
                    <Box>
                        <Typography
                            variant='h5'
                        >
                            Welcome to,
                            <Typography
                                variant='h3'
                                fontWeight={700}
                            >
                                Piggibag
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Outlet />
            </Grid>
            <SellerFooter />
        </Grid>
    )
}

export default Welcome