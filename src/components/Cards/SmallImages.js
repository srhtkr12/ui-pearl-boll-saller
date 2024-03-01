import React from 'react'
import { Grid, Box, Card, CardMedia } from '@mui/material';

const SmallImages = ({ images }) => {
    return (
        <Grid>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                {images.map((image, i) => (
                    <Card key={i} sx={{ maxWidth: '100px', maxHeight: '100px' }}>
                        <CardMedia
                            component="img"
                            width='100'
                            height="100"
                            image={image}
                            alt="Image"
                        />
                    </Card>
                ))}
            </Box>
        </Grid>
    )
}

export default SmallImages