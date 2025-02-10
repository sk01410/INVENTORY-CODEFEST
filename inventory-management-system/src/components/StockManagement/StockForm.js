import React, { useState } from 'react';

const StockForm = ({ onSubmit, initialData }) => {
    const [stockItem, setStockItem] = useState(initialData || { name: '', quantity: '', warehouse: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStockItem({ ...stockItem, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(stockItem);
        setStockItem({ name: '', quantity: '', warehouse: '' }); // Reset form after submission
    };

    return (
        <form onSubmit={handleSubmit} className="stock-form">
            <div>
                <label htmlFor="name">Stock Item Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={stockItem.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={stockItem.quantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="warehouse">Warehouse:</label>
                <input
                    type="text"
                    id="warehouse"
                    name="warehouse"
                    value={stockItem.warehouse}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StockForm;