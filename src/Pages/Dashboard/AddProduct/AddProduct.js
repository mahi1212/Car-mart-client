import React ,{ useState } from 'react';
import { Alert } from '@mui/material';
import axios from 'axios'
import { useForm} from "react-hook-form";

const AddProduct = () => {
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset()
                }
            })
        console.log(data);
    }
    return (
        <div>
            <h2>Add Product here</h2>
            <form className='form-design' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 50 })} placeholder='name' />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("price")} placeholder="Price" />
                <textarea {...register("img")} placeholder="Viewer redirect link(from imgBB)" />
                <p>Upload image from:<a href="https://imgbb.com/">redirect link here</a></p>
                <input type="submit" value='Confirm Order' />
            </form>
            {success && <Alert severity="success">Product added successfully!</Alert>}
        </div>
    );
};

export default AddProduct;