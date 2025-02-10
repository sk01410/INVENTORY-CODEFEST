export const predictStockLevels = (stockData) => {
  // Prediction logic here
  return stockData.map(item => ({
    ...item,
    predictedLevel: item.currentLevel - (item.averageDailyUsage * 7)
  }));
};

export const generateRestockSuggestions = (stockData) => {
  const predictions = predictStockLevels(stockData);
  return predictions.filter(item => item.predictedLevel < item.minimumLevel);
};

// Add this new export to match the import in PredictiveRestock.js
export const predictRestock = (stockData) => {
  return generateRestockSuggestions(stockData);
};