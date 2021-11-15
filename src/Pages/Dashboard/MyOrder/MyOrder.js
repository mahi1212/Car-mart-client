import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to delete order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ')
                        const leftOrders = orders.filter(order => order._id !== id)
                        setOrders(leftOrders)
                    }
                })
        }
    }
    useEffect(()=>{
        fetch(``)
    },[])
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>List of your orders</h2>
            <ol>
                {
                    orders.map(order => <li style={{ background:'whitesmoke',display: 'flex', justifyContent:'space-between', alignItems:'center', border: '1px solid #ccc', borderRadius: '3px',  width: '75vw', padding: '5px 10px', margin: '5px auto'}} key={order._id}>
                        <p style={{fontSize: '20px'}}>Product: {order.productName}</p>
                        <button style={{marginTop: '5px',fontSize: '16px', background:'#C10000', height:'30px', color: '#fff', cursor: 'pointer', border:'none', borderRadius: '3px' }} onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default MyOrder;