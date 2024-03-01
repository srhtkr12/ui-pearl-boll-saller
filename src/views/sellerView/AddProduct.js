import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { regexes } from '../../components/Regexes/Regexes';
import { Box, Button, Typography, Grid, Divider } from '@mui/material';
import { ImageCard } from '../../components/FormComponents/ImageInputs';
import { useCreateProductMutation, useGetProductByIdQuery, useEditProductMutation } from '../../redux/products/productsApi'
import { DropDownList } from '../../components/FormComponents/DropDownList'
import { TextInputFields } from '../../components/FormComponents/TextInputFields'
import { MultipleSelectCheckmarks } from '../../components/FormComponents/MultiSelectChecks'

const AddProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data } = useGetProductByIdQuery(id)
    const [editProduct] = useEditProductMutation()
    const [createProduct] = useCreateProductMutation()
    const [product, setProduct] = useState({
        product_Type: '',
        size: [],
        stock: 0,
        brand: '',
        title: '',
        subTitle: '',
        price: 0,
        fabric: '',
        discount: 0,
        category: '',
        product_Code: '',
        description: '',
        // thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        // images: ["https://i.dummyjson.com/data/products/4/1.jpg",
        // "https://i.dummyjson.com/data/products/4/2.jpg",
        // "https://i.dummyjson.com/data/products/4/3.jpg",
        // "https://i.dummyjson.com/data/products/4/4.jpg",
        // "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]
    })

    useEffect(() => {
        if (id && data) {
            setProduct(data)
        }
    }, [id, data])

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id && data) {
            await editProduct({ id, ...product }).then((res) => {
                if (res.data.status === 200) {
                    navigate(`/apps/seller/inventory`)
                    e.target.reset();
                }
            }).catch((err) => {
                console.log(err)
            })
        } else {
            await createProduct(product).then((res) => {
                if (res.data.status === 201) {
                    navigate(`/apps/seller/inventory`)
                    e.target.reset();
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <Grid sx={{
            p: 1,
            minWidth: '100%',
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center'
        }} >
            <Box component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 4,
                    m: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#fff',
                    flexDirection: 'column',
                    backgroundColor: '#6699CC',
                    gap: 2,
                }}>
                <Typography variant='h5'>{id ? 'EDIT' : 'ADD'} PRODUCT</Typography>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                    {
                        Object.keys(product).map((item) => {
                            if (item === 'size') {
                                return (
                                    <MultipleSelectCheckmarks
                                        key={item}
                                        id={item}
                                        name={item}
                                        label={item}
                                        labelId={item}
                                        multiple={true}
                                        defaultValue={''}
                                        value={product[item]}
                                        handleChange={handleChange}
                                    />
                                )
                            } else if (item === 'product_Type') {
                                return (
                                    <DropDownList
                                        key={item}
                                        id={item}
                                        name={item}
                                        label={item}
                                        labelId={item}
                                        multipSelect={false}
                                        placeholder={item}
                                        value={product[item]}
                                        handleChange={handleChange}
                                    />
                                )
                            } else {
                                if (item !== 'thumbnail' &&
                                    item !== 'createdAt' &&
                                    item !== 'updatedAt' &&
                                    item !== 'images' &&
                                    item !== '__v' &&
                                    item !== '_id') {
                                    return (
                                        <TextInputFields
                                            required
                                            fullWidth
                                            id={item}
                                            key={item}
                                            name={item}
                                            value={product[item]}
                                            multiline={item === 'description' ? true : false}
                                            rows={item === 'description' ? 3 : 0}
                                            label={item}
                                            placeholder={item}
                                            handleChange={handleChange}
                                            type={item === 'price' ||
                                                item === 'discount' ||
                                                item === 'stock' ? 'number' : 'text'}
                                        />
                                    )
                                }

                            }
                        })
                    }
                </Box>
                {/* <Box key={product.title} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Box>
                        <ImageCard
                            width={100}
                            height={100}
                            alt={product.title}
                            id={product.thumbnail}
                            image={product.thumbnail}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>{
                        product.images.map((img, i) => (
                            <ImageCard
                                key={i}
                                alt={i}
                                image={img}
                                width={100}
                                height={100}
                            />
                        ))
                    }</Box>
                </Box> */}

                <Divider />
                <Box >
                    <Button type='submit' variant="contained">{id ? 'Edit' : 'Add'} Product</Button>{' '}
                    <Button variant="secondary" onClick={() => navigate('/apps/seller/inventory')} >
                        Discard
                    </Button>
                </Box>
            </Box>
        </Grid >
    )
}

export default AddProduct;