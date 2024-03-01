import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { allProducts } from '../../JsonData/ProductsData';

const SmallCards = () => {
    return (
        <Grid component="ul"
            sx={{
                p: 0, m: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 2, flexWrap: 'wrap',
                py: 2
            }}>
            {
                allProducts.map((smaill, i) => {
                    if (i < 8) {
                        return (
                            <Card key={i} sx={{ width: '25%' }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={smaill.thumbnail}
                                    alt="title"
                                />
                            </Card>
                        )
                    }
                    return null;
                })
            }
        </Grid>
    )
}

export default SmallCards