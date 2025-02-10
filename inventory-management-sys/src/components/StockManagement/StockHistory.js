import React from 'react';

const StockHistory = () => {
    // Sample data for stock movement history
    const stockMovements = [
        { id: 1, item: 'Item A', date: '2023-10-01', action: 'Added', quantity: 50 },
        { id: 2, item: 'Item B', date: '2023-10-02', action: 'Removed', quantity: 20 },
        { id: 3, item: 'Item A', date: '2023-10-03', action: 'Transferred', quantity: 10 },
        { id: 4, item: 'Item C', date: '2023-10-04', action: 'Added', quantity: 30 },
    ];

    return (
        <div>
            <h2>Stock Movement History</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {stockMovements.map(movement => (
                        <tr key={movement.id}>
                            <td>{movement.id}</td>
                            <td>{movement.item}</td>
                            <td>{movement.date}</td>
                            <td>{movement.action}</td>
                            <td>{movement.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockHistory;