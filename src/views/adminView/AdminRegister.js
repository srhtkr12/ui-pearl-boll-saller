import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CheckBoxes } from '../../components/FormComponents/CheckBoxes'
import { useAddNewSellerMutation } from '../../redux/sellers/sellersApi'
import { TextInputFields } from '../../components/FormComponents/TextInputFields'
// import { regexes } from '../../components/Regexes/Regexes'

const SellerRegister = () => {
    const navigate = useNavigate()
    const [addNewSeller] = useAddNewSellerMutation()
    const [seller, setSeller] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        tnc: false
    })

    const handleChange = (e) => {
        setSeller({ ...seller, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNewSeller(seller).then((res) => {
            console.log('Seller', res)
            e.target.reset();
            navigate('/seller/login')
        }).catch((err) => {
            console.log(err)
        })
    }

    // const path = `data?.subCategory.replace(...allRegex.replaceSpaceWithUnderscore)`

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
                <Typography>Seller Register</Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{
                        pt: 2,
                        pb: 2,
                        display: 'grid',
                        gap: 2,
                        gridTemplateRows: 'repeat(3, 1fr)'
                    }}>
                    {
                        Object.keys(seller).map((item) => {
                            if (item === 'tnc') {
                                return (
                                    <CheckBoxes
                                        name={item}
                                        labelPlacement="end"
                                        checked={true}
                                        handleChange={handleChange}
                                        label="Terms & conditions apply."
                                    />
                                )
                            } else {
                                return (
                                    < TextInputFields
                                        id={item}
                                        name={item}
                                        type={item === 'password' || item === 'confirm_password' ? 'password' : item === 'email' ? 'email' : 'text'}
                                        label={item}
                                        placeholder={item}
                                        value={seller[item]}
                                        handleChange={handleChange}
                                    />
                                )
                            }
                        })
                    }
                    <Button type='submit' variant="contained" size="small">
                        Register
                    </Button>
                </Box>
                Already have a seller account <Link to='/seller/login' > Login </Link>here.
            </Box>
        </Grid >
    )
}

export default SellerRegister