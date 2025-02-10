import React from 'react';

const Overview = () => {
  const [warehouseData, setWarehouseData] = React.useState([
    { id: 1, name: 'Warehouse A', stockItems: 150, lowStock: 5 },
    { id: 2, name: 'Warehouse B', stockItems: 200, lowStock: 3 },
    { id: 3, name: 'Warehouse C', stockItems: 175, lowStock: 7 }
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {warehouseData.map(warehouse => (
        <div key={warehouse.id} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">{warehouse.name}</h2>
          <div className="mt-2">
            <p>Total Items: {warehouse.stockItems}</p>
            <p className="text-red-500">Low Stock Items: {warehouse.lowStock}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;