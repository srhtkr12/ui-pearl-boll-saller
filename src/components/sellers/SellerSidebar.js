import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Divider, Grid } from '@mui/material'
import { SideNav } from '../../navigations/SellerNavigates'
import { Contacts } from '../../navigations/SellerNavigates'

const SellerSidebar = () => {
    return (
        <Grid item xs={2} sx={{
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            maxHeight: '100vh',
        }}>
            <Box sx={{
                py: 3,
                minWidth: '100%',
                maxHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 3,
                fontSize: 20,
                color: '#fff',
                textDecoration: 'none',
                backgroundColor: '#6699CC'
            }}>
                <Box>
                    Seller Logo
                </Box>
                <Divider />
                <Box sx={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                    {SideNav.map((item) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {item.icon}
                            <Link textDecoration={'none'} to={item.path}> {item.title}</Link>
                        </Box>
                    ))}
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {
                        Contacts.map((item) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {item.icon}
                                <Link textDecoration={'none'} to={item.path}> {item.title}</Link>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Grid>
    )
}

export default SellerSidebar