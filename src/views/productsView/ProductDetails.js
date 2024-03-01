import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SmallImages from '../../components/Cards/SmallImages';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useGetAllProductsQuery } from '../../redux/products/productsApi';
import { Grid, Box, Card, CardMedia, Button, Typography, CardContent } from '@mui/material';

const Product = () => {
    const { id } = useParams()

    const [products, setProducts] = useState([])
    const { data, isLoading, isError } = useGetAllProductsQuery();

    useEffect(() => {
        setProducts(data)
    }, [data])

    const handleEdit = (e) => {
        console.log()
    }

    const handleDelete = (e) => {

    }

    return (
        <Grid>
            {products?.map((product) => (
                (product._id === id) && (

                    < Grid sx={{
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
                            <SmallImages images={product.images} />
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
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
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}>
                                    Price: {' '}<CurrencyRupeeIcon sx={{ fontSize: '16px', fontWeight: '700' }} />{product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}>
                                    Discount: {' '}<CurrencyRupeeIcon sx={{ fontSize: '16px', fontWeight: '700' }} />{product.discountPercentage}
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ p: 0 }}>
                                <Link to={`apps/payment/checkout`} >
                                    Buy This
                                </Link>
                                <Button >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Grid>
                )
            ))}
        </Grid >
    )
}

export default Product