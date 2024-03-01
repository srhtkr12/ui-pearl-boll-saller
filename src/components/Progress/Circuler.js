import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export const CircularLoader = () => {
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </Grid>
    );
}