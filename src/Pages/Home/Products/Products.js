import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://powerful-brushlands-32905.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>OUR PRODUCTS</h2>
            <Grid container spacing={{ xs: 2, md: 2 }} sx={{ py: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    // setting limitation .slice(0,6)
                    window.location.href === 'https://jovial-noether-5986ce.netlify.app/home' ?
                        products.slice(0, 6).map(product => <Product product={product} key={product.id}></Product>) :
                        products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </Grid>
        </>
    );
};

export default Products;