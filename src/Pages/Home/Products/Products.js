import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';

// const review = [
//     {
//         name: "Mainur Rahman",
//         email:"mahi121.mr@gmail.com",
//         description: "One of the best service provider i've ever seen. They are great in work",
//     },
//     {
//         name: "Jannat Jenny",
//         email:"jannatNur@gmail.com",
//         description: "They are awesome in behaviour.I can suggest you guys a highly recommendation",
//     },

//     {
//         name: "Mahfuzur Rahman",
//         email:"mahfuz@gmail.com",
//         description: "They protect car very wisely.And my car is still in good condition. Which i brought from them.",
//     }
    
// ]
// {
//     id: 3,
//     name: "2022 Civic Sedan",
//     price: "27,990",
//     description: " Blind Spot Information System with Cross Traffic Monitor Apple CarPlay Integration ,Android Auto™ Integration, Honda Sensing system",
//     img: "https://st.motortrend.com/uploads/sites/5/2021/07/2022-Honda-Civic-Touring-front-three-quarter-in-motion-3.jpg"
// }

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>OUR PRODUCTS</h2>
            <Grid container spacing={{ xs: 2, md: 2 }} sx={{ py: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    // setting limitation .slice(0,6)
                        window.location.href === 'http://localhost:3000/home' || 'http://localhost:3000' ?
                        products.slice(0, 4).map(product => <Product product={product} key={product.id}></Product>) :
                        products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </Grid>
        </>
    );
};

export default Products;