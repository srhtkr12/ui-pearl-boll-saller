import React from 'react'
import { Grid } from '@mui/material'
import { SellerFooter } from '../../components/sellers/SellerFooter'
import { SellerProtectedRoute } from '../../routes/ProtectedRoute';
import SalerSidebar from '../../components/sellers/SellerSidebar';
import SellerMenubar from '../../components/sellers/SellerMenubar'

const Seller = () => {
    return (
        <Grid sx={{ backgroundColor: '#003B6D' }}>
            <SellerMenubar />
            <Grid container sx={{ display: 'flex' }}>
                <SalerSidebar />
                <Grid item xs={10} sx={{ display: 'flex' }}>
                    <SellerProtectedRoute />
                </Grid>
            </Grid>
            <SellerFooter />
        </Grid>
    )
}

export default Seller