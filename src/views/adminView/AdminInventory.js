import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PopUps } from '../../components/Modals/PopUps'
import { DataTable } from '../../components/sellers/DataTable';
import { useGetAllProductsQuery, useDeleteProductMutation } from '../../redux/products/productsApi';
import { Grid, Box, Button, Divider, CardMedia, Card, IconButton } from '@mui/material';

const SellerInventories = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [deleteProduct] = useDeleteProductMutation()
    const { data, error, isLoading } = useGetAllProductsQuery()

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const sortedData = data.slice().sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateB - dateA;
            });
            setProducts(sortedData);
        }
    }, [data]);

    const handleEdit = (id) => {
        navigate(`/apps/seller/inventory/action/${id}`)
    };

    const handleDelete = async (id) => {
        await deleteProduct(id).then((res) => {
            console.log('res', res)
        }).catch((err) => {
            console.log('err', err)
        })
    };

    const columns = [
        {
            id: 'thumbnail',
            label: 'Image',
            minWidth: 60,
            format: (value, row) => {
                console.log('value', value)
                console.log('row', row?._id)
                return (
                    <Link to={`/apps/seller/inventory/${row?._id}`}>
                        <Card sx={{ p: 0, m: 0 }}>
                            <CardMedia
                                component="img"
                                width="80"
                                height="80"
                                image={value}
                                alt=".."
                            />
                        </Card>
                    </Link>
                )
            }
        },
        {
            id: 'title',
            label: 'Product Name',
            minWidth: 80,
            format: (value) => value.substr(0, 4),
        },
        {
            id: 'product_Code',
            label: 'Product Code',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'product_Type',
            label: 'Product Type',
            minWidth: 100,
            format: (value) => value.toFixed(2),
        },
        {
            id: 'category',
            label: 'Category',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'price',
            label: 'Price',
            minWidth: 100,
            format: (value) => value.toFixed(2),
        },
        {
            id: 'description',
            label: 'Description',
            format: (value) => value.substr(0, 10),
        },
        {
            id: 'action',
            label: 'Action',
            format: (value, row) => (
                <Box sx={{ display: 'flex' }}>
                    <IconButton onClick={() => handleEdit(row._id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (

        <Grid sx={{ p: 1, minHeight: '100%', minWidth: '100%' }}>
            <Box sx={{ m: 0, p: 2, backgroundColor: '#6699CC' }}>
                <Box sx={{ pb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={() => navigate('/apps/seller/action')}>Add Product</Button>
                </Box>
                <Divider sx={{ mb: 1 }} />
                <DataTable
                    rows={products}
                    columns={columns}
                    checkboxSelection={false}
                />
            </Box>
        </Grid>

    )
}

export default SellerInventories;