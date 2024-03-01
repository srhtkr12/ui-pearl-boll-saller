import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { allProducts } from '../../JsonData/ProductsData';

const BigCards = () => {
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
                allProducts.map((big, i) => {
                    if (i < 2) {
                        return (
                            <Card key={i} sx={{ width: '45%' }}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={big.thumbnail}
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

export default BigCards