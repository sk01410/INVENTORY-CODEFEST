import React from 'react';

const StockList = ({ stockItems }) => {
    return (
        <div>
            <h2>Stock List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Warehouse</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stockItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.warehouse}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockList;