import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './Review.css'
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    // Send to database
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://powerful-brushlands-32905.herokuapp.com/review', data)
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
            <div className='full-form'>
                <form className='form-design' style={{ padding: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
                    <h2>REVIEW</h2>
                    <input {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} />
                    <input {...register("email")} value={user?.email} />
                    <textarea {...register("description")} placeholder="Your Review Here" required/>
                    <input type="submit" value='Confirm Review' className='button' />
                </form>
            </div>
        </div>
    );
};

export default Review;