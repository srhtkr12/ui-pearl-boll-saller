import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginSellerMutation } from '../../redux/sellers/sellersApi'
import { Box, Button, Grid, Typography } from '@mui/material'
import { TextInputFields } from '../../components/FormComponents/TextInputFields'

const SellerLogin = () => {
    const navigate = useNavigate()
    const [loginSeller] = useLoginSellerMutation()
    const [seller, setSeller] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setSeller({ ...seller, [e.target.name]: e.target.value })
    }

    console.log('Login', seller)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!seller.email || !seller.password) {
            return console.log("Please fill in all fields.");
        } else {
            await loginSeller({ email: seller.email, password: seller.password }, { withCredentials: true })
                .then((res) => {
                    console.log('Is Login', res)
                    // e.target.reset();
                    navigate('/apps/seller')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    return (
        <Grid xs={4} sx={{
            p: 0,
            m: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '95vh',
            backgroundColor: '#9ee7f5'
        }}>
            <Box>
                <Typography>Seller Login</Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{
                        pt: 2,
                        pb: 4,
                        display: 'grid',
                        gap: 2,
                        gridTemplateRows: 'repeat(3, 1fr)'
                    }}>
                    {Object.keys(seller).map((item, i) => (
                        < TextInputFields
                            key={i}
                            name={item}
                            type={item === 'email' ? 'email' : 'password'}
                            label={item}
                            // placeholder={item ? '' : item}
                            value={seller[item]}
                            handleChange={handleChange}
                        />
                    ))}
                    <Button type='submit' variant="contained" size="small">
                        Login
                    </Button>
                </Box>
                Don't have a seller account <Link to='/seller/register' > Register </Link>here.
            </Box>
        </Grid>
    )
}

export default SellerLogin