const Overview = () => {
    // Sample data for stock levels in each warehouse
    const stockLevels = [
        { warehouse: 'Warehouse A', stock: 120 },
        { warehouse: 'Warehouse B', stock: 80 },
        { warehouse: 'Warehouse C', stock: 50 },
    ];

    return (
        <div className="overview">
            <h2>Stock Overview</h2>
            <ul>
                {stockLevels.map((item, index) => (
                    <li key={index}>
                        {item.warehouse}: {item.stock} items
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;