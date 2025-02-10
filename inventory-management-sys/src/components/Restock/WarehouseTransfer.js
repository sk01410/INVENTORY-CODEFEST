import React, { useState, useEffect } from 'react';
import { transferStock } from '../../services/api';

const WarehouseTransfer = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [fromWarehouse, setFromWarehouse] = useState('');
    const [toWarehouse, setToWarehouse] = useState('');
    const [stockItem, setStockItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                // Mock data - replace with actual API call
                const mockWarehouses = [
                    { id: '1', name: 'Warehouse A' },
                    { id: '2', name: 'Warehouse B' },
                    { id: '3', name: 'Warehouse C' }
                ];
                setWarehouses(mockWarehouses);
            } catch (err) {
                setError('Failed to fetch warehouses');
            }
        };

        fetchWarehouses();
    }, []);

    const handleTransfer = async (e) => {
        e.preventDefault();
        if (!fromWarehouse || !toWarehouse || !stockItem || !quantity) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const result = await transferStock(fromWarehouse, toWarehouse, {
                item: stockItem,
                quantity: parseInt(quantity)
            });
            setMessage('Transfer successful!');
            // Reset form
            setStockItem('');
            setQuantity('');
        } catch (err) {
            setError('Transfer failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Warehouse Transfer</h2>
            
            <form onSubmit={handleTransfer} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            From Warehouse
                        </label>
                        <select 
                            className="w-full p-2 border rounded-md"
                            value={fromWarehouse}
                            onChange={(e) => setFromWarehouse(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Select Warehouse</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>
                                    {warehouse.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            To Warehouse
                        </label>
                        <select 
                            className="w-full p-2 border rounded-md"
                            value={toWarehouse}
                            onChange={(e) => setToWarehouse(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Select Warehouse</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>
                                    {warehouse.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stock Item
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter item name"
                            value={stockItem}
                            onChange={(e) => setStockItem(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            disabled={loading}
                        />
                    </div>
                </div>

                {error && (
                    <div className="text-red-500 text-sm mt-2">{error}</div>
                )}
                
                {message && (
                    <div className="text-green-500 text-sm mt-2">{message}</div>
                )}

                <button
                    type="submit"
                    className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={loading}
                >
                    {loading ? 'Transferring...' : 'Transfer Stock'}
                </button>
            </form>
        </div>
    );
};

export default WarehouseTransfer;