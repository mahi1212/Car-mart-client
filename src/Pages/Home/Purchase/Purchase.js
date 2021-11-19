import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios'
import './Purchase.css'
import { Alert } from '@mui/material';

const Purchase = () => {
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://powerful-brushlands-32905.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    // POST DATA TO SERVER
    const onSubmit = data => {
        axios.post(`https://powerful-brushlands-32905.herokuapp.com/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
        console.log(data);
    }

    return (
        <div>
            <Header></Header>
            <div className='box'>
                <h2>PURCHASE PRODUCT</h2>
                <Alert severity="warning">Please wait sometime before confirming order! Server may take time to load your data</Alert>
                <form onSubmit={handleSubmit(onSubmit)} className="form" >
                    {/* Name, email etc from database */}
                    <input {...register("productName")} value={product?.name} defaultValue={'Car id no :'+ id } />
                    <input {...register("name", { required: true })} placeholder={user.displayName} required />
                    <input {...register("email")} value={user.email} />
                    <textarea {...register("description")} value={product?.description} />
                    <input {...register("address")} placeholder="Address" required/>
                    <input type="submit" value='Confirm Order' style={{ height: '35px', background: 'navy', cursor: 'pointer', color: '#fff' }} />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;