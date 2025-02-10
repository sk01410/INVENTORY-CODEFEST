export const fetchStockItems = async () => {
    const response = await fetch('/api/stock');
    if (!response.ok) {
        throw new Error('Failed to fetch stock items');
    }
    return await response.json();
};

export const addStockItem = async (stockItem) => {
    const response = await fetch('/api/stock', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockItem),
    });
    if (!response.ok) {
        throw new Error('Failed to add stock item');
    }
    return await response.json();
};

export const updateStockItem = async (id, stockItem) => {
    const response = await fetch(`/api/stock/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockItem),
    });
    if (!response.ok) {
        throw new Error('Failed to update stock item');
    }
    return await response.json();
};

export const deleteStockItem = async (id) => {
    const response = await fetch(`/api/stock/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete stock item');
    }
    return await response.json();
};

export const fetchSellers = async () => {
    const response = await fetch('/api/sellers');
    if (!response.ok) {
        throw new Error('Failed to fetch sellers');
    }
    return await response.json();
};