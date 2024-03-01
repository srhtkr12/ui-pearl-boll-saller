import React, { useState } from 'react'
import { Card, CardMedia, Grid, Typography, TextField, Stack, Button, Box, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material'

const Profile = () => {
    const [value, setValue] = useState();

    const handleChange = (e) => {
        e.preventDefault()
    }

    return (
        <Grid>
            <Grid container spacing={2} sx={{ p: 2 }}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 200, maxHeight: 200, borderRadius: '50%' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={'https://i.dummyjson.com/data/products/29/thumbnail.webp'}
                            alt="title"
                        />
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h3'>User Name</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ py: 2, display: 'flex', gap: 3 }}>
                <Box variant="form" sx={{ py: 2, display: 'flex', gap: 3 }} >
                    <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography>User Details</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            placeholder='Username'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="First Nname"
                            placeholder='First Name'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            placeholder='Last Name'
                            defaultValue=""
                        />
                        <RadioGroup
                            sx={{ display: 'flex' }}
                            name="gender"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <TextField
                            required
                            id="outlined-required"
                            label="Date of Birth"
                            placeholder='DD/MM/YYYY'
                            defaultValue=""
                        />

                        <Stack direction="row" spacing={2}>
                            <Button variant="contained">Submit</Button>
                            <Button variant="contained" disabled>
                                Discard
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography>User Cantact</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            placeholder='Email Address'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Mobile"
                            placeholder='Mobile Number'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Landmark"
                            placeholder='Landmark'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            placeholder='Address'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            placeholder='City'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            placeholder='State'
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Pin Code"
                            placeholder='Pin Code'
                            defaultValue=""
                        />

                    </Grid>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Profile;