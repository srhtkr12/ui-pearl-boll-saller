import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/pb-logo.jpg'
// import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import { AuthService } from '../../helper/jwsStore'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import CartIcon from '@mui/icons-material/LocalGroceryStore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, InputBase, Container, Box, Toolbar, Menu, Button, Tooltip, MenuItem, Avatar, IconButton, Typography, Badge, Card, CardMedia } from '@mui/material';
import { useGetUserByIdQuery } from '../../redux/users/usersApi';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const pages = ['Product', 'Pricing', 'Blog'];
const settings = ['Profile', 'Settings', 'Dashboard', 'Logout'];

const MenuBar = ({ user }) => {
    const navigate = useNavigate()
    const [navBar, setNavBar] = useState(null);
    const [userMenu, setUserMenu] = useState(null);

    const { data } = useGetUserByIdQuery(user)

    const handleOpenNavBar = (e) => {
        setNavBar(e.currentTarget);
    };
    const handleOpenUserMenu = (e) => {
        setUserMenu(e.currentTarget);
    };

    const handleCloseNavBar = () => {
        setNavBar(null);
    };

    const handleCloseUserMenu = () => {
        setUserMenu(null);
    };

    const Logout = () => {
        AuthService.logout()
        navigate('/login')
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link to={`/`}>
                        <Card sx={{ mr: 1, width: '40px', height: '40px', borderRadius: '50%', display: 'flex' }}>
                            <CardMedia
                                component="img"
                                width='100%'
                                height='100%'
                                image={Logo}
                                alt={Logo}
                            />
                        </Card>
                    </Link>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Piggibag
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavBar}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={navBar}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(navBar) || false}
                            onClose={handleCloseNavBar}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavBar}>
                                {pages.map((page) => {
                                    return (
                                        <Typography key={page} textAlign="center">
                                            {page}
                                        </Typography>
                                    )
                                })}
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavBar}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={`apps/${page.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none' }}>{page}</Link>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center', flexGrow: 0 }}>

                        <Typography
                            component="a"
                            href="user/cart"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Badge badgeContent={5} color="error">
                                <CartIcon />
                            </Badge>
                        </Typography>

                        <Typography
                            component="a"
                            href="user/masseges"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </Typography>
                        <Typography
                            component="a"
                            href="user/notifications"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </Typography>
                        Hi, {data?.first_name}
                        <Tooltip title="Open settings" sx={{ ml: -2 }}>
                            <IconButton onClick={handleOpenUserMenu} >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={userMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(userMenu)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {!setting === 'Logout' ? <Link
                                            to={`apps/user/${setting.toLowerCase()}`}
                                            style={{ textDecoration: 'none' }}>
                                            {setting}
                                        </Link>
                                            :
                                            <Button
                                                onClick={Logout}
                                                style={{ textDecoration: 'none' }}>
                                                {setting}
                                            </Button>}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default MenuBar;
