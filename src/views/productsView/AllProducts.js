import React, { useState, useEffect } from 'react'
import { Grid, Box } from '@mui/material';
import ProductCard from '../../components/Cards/ProductCard'
import { CircularLoader } from '../../components/Progress/Circuler'
import { useGetAllProductsQuery } from '../../redux/products/productsApi';

const Products = () => {
    const [products, setProducts] = useState([])
    const { data, isLoading, isError } = useGetAllProductsQuery();

    console.log('data', data)

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <Grid sx={{ p: 2, display: 'flex', justifyContent: 'center', backgroundColor: 'ghostwhite' }}>
            <Box
                sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(4, 1fr)'
                }}
            >
                {isLoading ? <CircularLoader />
                    : products && products?.map((item) => {
                        return (
                            <ProductCard
                                key={item._id}
                                itemId={item._id}
                                title={item.title}
                                price={item.price}
                                brand={item.brand}
                                rating={item.rating}
                                images={item.images}
                                thumbnail={item.thumbnail}
                                category={item.category}
                                subTitle={item.subTitle}
                                path='product'
                                discount={item.discountPercentage}
                                description={item.description.substring(0, 50)}
                                stock={item.stock > 0 ? 'In Stock' : 'Out Of Stock'}
                            />
                        )
                    })}
            </Box>
        </Grid>
    )
}

export default Products