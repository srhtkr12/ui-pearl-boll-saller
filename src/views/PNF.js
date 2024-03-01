import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Grid sx={{ py: 7, display: 'flex', justifyContent: 'center', backgroundColor: 'ghostwhite' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant='h4'>Page Not Found! 404.</Typography>
                <Typography>Got to <Link to='/'>Home</Link>.</Typography>
            </Box>
        </Grid>
    )
}

export default PageNotFound;