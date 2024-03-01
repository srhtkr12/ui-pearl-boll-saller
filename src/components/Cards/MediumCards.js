import React, { useEffect, useState } from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { useGetAllProductsQuery } from '../../redux/products/productsApi'

const MediumCards = () => {
    const [products, setProducts] = useState([])
    const { data, error, isLoading } = useGetAllProductsQuery()
    useEffect(() => {
        setProducts(data)
    }, [data])
    return (
        <Grid component="ul"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 2, flexWrap: 'wrap',
                p: 0, m: 0, py: 2
            }}>
            {
                products?.map((medium, i) => {
                    if (i < 4) {
                        return (
                            <Card key={i} sx={{ width: '40%' }}>
                                <CardMedia
                                    component="img"
                                    height="445"
                                    image={medium.thumbnail}
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

export default MediumCards