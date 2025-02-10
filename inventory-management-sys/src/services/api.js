import axios from 'axios';
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
export const transferStock = async (fromWarehouse, toWarehouse, transferData) => {
    try {
        // Mock API call - replace with actual API endpoint
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Transfer completed successfully',
                    data: {
                        fromWarehouse,
                        toWarehouse,
                        ...transferData
                    }
                });
            }, 1000);
        });

        return response;
    } catch (error) {
        throw new Error('Failed to transfer stock: ' + error.message);
    }
};.app {
  min-height: 100vh;
  background-color: #f3f4f6;
}

.header {
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #374151;
  text-decoration: none;
}

.nav-link:hover {
  color: #1a56db;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.warehouse-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.stock-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.low-stock {
  color: #dc2626;
}

.button {
  background-color: #1a56db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #1e40af;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}