const calculateStockLevel = (stockItems) => {
    return stockItems.reduce((total, item) => total + item.quantity, 0);
};

const filterLowStockItems = (stockItems, threshold) => {
    return stockItems.filter(item => item.quantity < threshold);
};

const formatStockData = (stockItems) => {
    return stockItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        warehouse: item.warehouse,
    }));
};

const generateRestockSuggestion = (currentStock, reorderPoint) => {
    return currentStock < reorderPoint ? reorderPoint - currentStock : 0;
};

export {
    calculateStockLevel,
    filterLowStockItems,
    formatStockData,
    generateRestockSuggestion,
};