import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestockOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestockOrders = async () => {
            try {
                const response = await axios.get('/api/restock-orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching restock orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestockOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Restock Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <p>Item: {order.itemName}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Supplier: {order.supplier}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestockOrders;