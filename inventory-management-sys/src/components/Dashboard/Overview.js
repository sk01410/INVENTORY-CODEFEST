import React from 'react';

const Overview = () => {
  const warehouseData = [
    { id: 1, name: 'Warehouse A', stockItems: 150, lowStock: 5 },
    { id: 2, name: 'Warehouse B', stockItems: 200, lowStock: 3 },
    { id: 3, name: 'Warehouse C', stockItems: 175, lowStock: 7 }
  ];

  return (
    <div className="dashboard-grid">
      {warehouseData.map(warehouse => (
        <div key={warehouse.id} className="warehouse-card">
          <h2 className="card-title">{warehouse.name}</h2>
          <div className="stock-info">
            <span>Total Items:</span>
            <span>{warehouse.stockItems}</span>
          </div>
          <div className="stock-info">
            <span>Low Stock Items:</span>
            <span className="low-stock">{warehouse.lowStock}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;