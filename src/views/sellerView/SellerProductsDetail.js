import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularLoader } from '../../components/Progress/Circuler'
import { useGetAllProductsQuery } from '../../redux/products/productsApi'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const SellerProductsDetail = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const { data, isLoading, isError } = useGetAllProductsQuery();

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <Grid sx={{ p: 1, minHeight: '100%', minWidth: '100%' }}>
            <Box sx={{ m: 0, p: 2, backgroundColor: '#6699CC' }}>
                {isLoading ? <CircularLoader /> :
                    products?.map((product) => (
                        (product._id === id) && (
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 2,
                                p: 0, m: 0, py: 1
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    p: 0, m: 0
                                }}>
                                    <Box>
                                        <Card
                                            sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                width='200'
                                                height="250"
                                                image={product.thumbnail}
                                                alt="Image"
                                            />
                                        </Card>
                                    </Box>
                                </Box>
                                {/* Secont Col */}
                                <CardContent sx={{ py: 0 }}>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{
                                            width: '500px',
                                            fontSize: '20px',
                                        }}>
                                        {product.description}
                                    </Typography>
                                    <CardContent sx={{ px: 0 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: '700' }}>
                                            Price: Rs{product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: '700' }}>
                                            Discount: Rs{product.discount}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ p: 0 }}>
                                        <Button variant="contained" >
                                            Edit
                                        </Button>{' '}
                                        <Button variant="contained">
                                            Delete
                                        </Button>
                                    </CardContent>
                                </CardContent>
                            </Grid>
                        )
                    ))}
            </Box>
        </Grid>
    )
}

export default SellerProductsDetail