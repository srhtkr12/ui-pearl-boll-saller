import React from 'react'
import { Link, Paper, CardMedia, Card } from '@mui/material'

const CrouselItem = ({ name, url }) => {

    return (
        <Paper>
            <Link to={`/apps/product/details`}>
                <Card borderRadius={4} sx={{
                    width: '100%', height: '60vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <CardMedia
                        component="img"
                        width='100%'
                        height='100%'
                        borderRadius={5}
                        image={url}
                        alt={name}
                    />
                </Card>
            </Link>
            {/* <h2>{name}</h2>
            <Button className='CheckButton'>
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default CrouselItem