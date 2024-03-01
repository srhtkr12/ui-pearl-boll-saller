import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';

import SendIcon from '@mui/icons-material/Send';
import ListItemButton from '@mui/joy/ListItemButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            Piggibag{' '}
            {2021}
            {'.'}
        </Typography>
    );
    }

export const Footer = () => {
    const [color, setColor] = useState('neutral');

    return (

        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                ...(color !== 'neutral' && {
                    bgcolor: `${color}.800`,
                }),
                flexGrow: 1,
                p: 2,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                    variant="soft"
                    size="sm"
                    onClick={() => {
                        const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

                        const nextColorIndex = colors.indexOf(color) + 1;
                        setColor(colors[nextColorIndex] ?? colors[0]);
                    }}
                >
                    <ColorLensRoundedIcon fontSize="small" />
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton variant="plain">
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton variant="plain">
                    <InstagramIcon />
                </IconButton>
                <IconButton variant="plain">
                    <WhatsAppIcon />
                </IconButton>
                <Input
                    variant="soft"
                    placeholder="Type in your email"
                    type="email"
                    name="email"
                    endDecorator={
                        <IconButton variant="soft" aria-label="subscribe">
                            <SendIcon />
                        </IconButton>
                    }
                    sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'flex-start' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Card
                    variant="soft"
                    size="sm"
                    sx={{
                        mb: 2,
                        flexDirection: { xs: 'row', md: 'column' },
                        minWidth: { xs: '100%', md: 'auto' },
                        gap: 1,
                    }}
                >
                    <AspectRatio
                        ratio="21/9"
                        minHeight={80}
                        sx={{ flexBasis: { xs: 200, md: 'initial' } }}
                    >
                        <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="body-sm">Piggibag for all your fashion needs.</Typography>
                        {/* <Typography level="body-xs">Blog post</Typography> */}
                    </CardContent>
                </Card>
                <List
                    size="sm"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
                >
                    <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                        <Typography sx={{ fontWeight: 'xl' }}>Sitemap</Typography>
                        <List>
                            <ListItem>
                                <ListItemButton>Services</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Blog</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>About</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                        <Typography sx={{ fontWeight: 'xl' }}>Products</Typography>
                        <List sx={{ '--ListItemDecorator-size': '32px' }}>
                            <ListItem>
                                <ListItemButton>Joy UI</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Base UI</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Material UI</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
            <Divider />
            <Copyright sx={{ mt: 2 }} />
        </Sheet>
    );
}

export default Footer;