import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Grid } from '@mui/material';
import NavBar from '../components/Bars/NavBar'
import MenuBar from '../components/Bars/MenuBar'

const Header = () => {
    const [status, setStatus] = useState(false)
    const token = Cookies.get('token');
    const user = Cookies.get('user');

    useEffect(() => {
        isLogin()
    }, [token, status])

    const isLogin = () => {
        if (token?.length > 21) {
            setStatus(true)
            return;
        } else {
            setStatus(false)
            return;
        }
    }

    return (
        <Grid>
            {status ? <MenuBar user={user} /> : <NavBar />}
        </Grid>
    )
}

export default Header