import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAddNewUserMutation } from '../redux/users/usersApi'
import { Container, Box, Button, Typography } from '@mui/material';
import { CheckBoxes } from '../components/FormComponents/CheckBoxes';
import { TextInputFields } from '../components/FormComponents/TextInputFields';

const Register = () => {
    const navigate = useNavigate()
    const [addNewUser] = useAddNewUserMutation()
    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        tnc: true
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser(user).then((res) => {
            console.log(res)
            navigate('/login')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Container sx={{ py: 2, }}>
            <Link to='/'>Home</Link>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
                noValidate
                autoComplete="off"
            >
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{
                        py: 2,
                        px: 4,
                        borderRadius: 2,
                        textJustify: 'center',
                        backgroundColor: 'ghostwhite',
                        display: 'grid',
                        gap: 1.5,
                        gridTemplateRows: 'repeat(3, 1fr)'
                    }}>
                    <Typography variant='h4' sx={{ m: 0, p: 0 }}>User Register</Typography>
                    {Object.keys(user).map((item) => {
                        if (item === 'tnc') {
                            return (
                                <CheckBoxes
                                    name={item}
                                    labelPlacement="end"
                                    checked={user[item]}
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
                                    value={user[item]}
                                    handleChange={handleChange}
                                />
                            )
                        }
                    })}
                    <Button type='submit' variant="contained" size="small" sx={{ width: '100px', height: '40px' }}>
                        Register
                    </Button>
                    <Typography>Already have an Account? <Link to='/login'>Login</Link> here.</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Register