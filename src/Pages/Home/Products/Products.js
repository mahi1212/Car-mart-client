import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';

// const products = [
//     {
//         id: 1,
//         name: "CR-V Hybrid",
//         price: "25,880",
//         description: "The best-selling crossover over the past decade* is also available with an advanced hybrid powertrain, offering all-wheel drive and an electrifying ride.",
//         img: "https://www.carscoops.com/wp-content/uploads/2020/11/2021-Honda-CR-V-Hybrid-00.jpg"
//     },
//     {
//         id: 2,
//         name: "HR-V Hybrid",
//         price: "22,660",
//         description: " Real Time AWD with Intelligent Control System™ allows the HR-V to proactively send power to the rear wheels. It’s yet another HR-V feature designed to provide confidence and peace of mind.",
//         img: "https://i.cdn.newsbytesapp.com/images/l207_34131613630217.jpg"
//     },
//     {
//         id: 3,
//         name: "2022 Civic Sedan",
//         price: "27,990",
//         description: " Blind Spot Information System with Cross Traffic Monitor Apple CarPlay Integration ,Android Auto™ Integration, Honda Sensing system",
//         img: "https://st.motortrend.com/uploads/sites/5/2021/07/2022-Honda-Civic-Touring-front-three-quarter-in-motion-3.jpg"
//     },
//     {
//         id: 4,
//         name: "2022 Insight",
//         price: "25,210",
//         description: " Collision Mitigation Braking System, standard feature Collision Mitigation Braking System Road Departure Mitigation System",
//         img: "https://blogmedia.dealerfire.com/wp-content/uploads/sites/703/2021/06/2022-Honda-Insight_o.jpg"
//     },
//     {
//         id: 5,
//         name: "Accord Sedan-2021",
//         price: "31,520",
//         description: " Power Front Seats w/Driver’s Memory Seat 10-Speaker, 450-Watt audio System,Dual-Zone Automatic alima Control Leather-Wrapped ateering Wheelem, 40 Split Fold-Down aear Seat",
//         img: "https://cdn.carbuzz.com/gallery-images/2022-honda-accord-hybrid-carbuzz-773784.jpg"
//     },
//     {
//         id: 6,
//         name: "Clearity Fuel Cell",
//         price: "26,500",
//         description: "Prices shown are manufacturer’s suggested retail prices only. Prices exclude applicable taxes. Honda Genuine Accessories installed at time of vehicle purchase are covered by a 3-year/36,000-mile limited warranty. ",
//         img: "https://cdn.motor1.com/images/mgl/Egj0z/s3/honda-clarity-fuel-cell-1-1920.jpg"
//     },
// ]


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
                    window.location.href === 'http://localhost:3000/home' || 'NaN' ?
                        products.slice(0, 4).map(product => <Product product={product} key={product.id}></Product>) :
                        products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </Grid>
        </>
    );
};

export default Products;