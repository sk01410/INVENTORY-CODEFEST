import React, { useEffect, useState } from 'react';
import { predictRestock } from '../../services/stockPrediction';

const PredictiveRestock = ({ stockData }) => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            const predictedData = await predictRestock(stockData);
            setPredictions(predictedData);
        };

        fetchPredictions();
    }, [stockData]);

    return (
        <div>
            <h2>Predictive Restock Suggestions</h2>
            <ul>
                {predictions.map((prediction, index) => (
                    <li key={index}>
                        {prediction.item} - Suggested Restock: {prediction.suggestedAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PredictiveRestock;