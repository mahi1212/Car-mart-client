import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://powerful-brushlands-32905.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to delete order?')
        if (proceed) {
            fetch(`https://powerful-brushlands-32905.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ')
                        const leftproducts = products.filter(product => product._id !== id)
                        setProducts(leftproducts)
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>List of your Products</h2>
            <ol>
                {
                    products.map(product => <li style={{ background: 'whitesmoke', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', width: '75vw', padding: '5px 10px', margin: '5px auto' }} key={product._id}>
                        <p style={{ fontSize: '20px' }}>Product: {product.name}</p>
                        <button style={{ marginTop: '5px', fontSize: '16px', background: '#C10000', height: '30px', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '3px' }} onClick={() => handleDeleteOrder(product._id)}>Delete</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default ManageProduct;