import React, { useEffect, useState } from 'react';
import { predictStockLevels, generateRestockSuggestions } from '../../services/stockPrediction';

const PredictiveRestock = () => {
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPredictions = async () => {
            try {
                // Mock data - replace with actual API call
                const mockStockData = [
                    { id: 1, name: 'Item A', currentLevel: 50, minimumLevel: 100, averageDailyUsage: 5 },
                    { id: 2, name: 'Item B', currentLevel: 30, minimumLevel: 75, averageDailyUsage: 3 },
                    { id: 3, name: 'Item C', currentLevel: 80, minimumLevel: 60, averageDailyUsage: 2 }
                ];

                const predictions = generateRestockSuggestions(mockStockData);
                setPredictions(predictions);
            } catch (error) {
                console.error('Failed to fetch predictions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPredictions();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Predictive Restock Suggestions</h2>
            {predictions.length === 0 ? (
                <p className="text-gray-600">No restock suggestions at this time.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left">Item Name</th>
                                <th className="px-4 py-2 text-left">Current Level</th>
                                <th className="px-4 py-2 text-left">Predicted Level</th>
                                <th className="px-4 py-2 text-left">Suggested Restock</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {predictions.map((prediction) => (
                                <tr key={prediction.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{prediction.name}</td>
                                    <td className="px-4 py-2">{prediction.currentLevel}</td>
                                    <td className="px-4 py-2">{prediction.predictedLevel}</td>
                                    <td className="px-4 py-2">
                                        {prediction.minimumLevel - prediction.predictedLevel}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button 
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                            onClick={() => console.log('Create restock order for', prediction.name)}
                                        >
                                            Create Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PredictiveRestock;