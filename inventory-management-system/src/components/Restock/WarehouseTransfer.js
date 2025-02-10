import React, { useState, useEffect } from 'react';
import { transferStock } from '../../services/api';

const WarehouseTransfer = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [stockItem, setStockItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch warehouses from the API or context
        const fetchWarehouses = async () => {
            // Replace with actual API call
            const response = await fetch('/api/warehouses');
            const data = await response.json();
            setWarehouses(data);
        };

        fetchWarehouses();
    }, []);

    const handleTransfer = async () => {
        const result = await transferStock(selectedWarehouse, stockItem, quantity);
        if (result.success) {
            setMessage('Transfer successful!');
        } else {
            setMessage('Transfer failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Warehouse Transfer</h2>
            <select onChange={(e) => setSelectedWarehouse(e.target.value)} value={selectedWarehouse}>
                <option value="">Select Warehouse</option>
                {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Stock Item"
                value={stockItem}
                onChange={(e) => setStockItem(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleTransfer}>Transfer Stock</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default WarehouseTransfer;