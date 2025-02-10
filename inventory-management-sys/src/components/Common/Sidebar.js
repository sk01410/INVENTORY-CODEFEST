import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Inventory Management</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/stock-management">Stock Management</Link></li>
                <li><Link to="/restock">Restock</Link></li>
                <li><Link to="/search">Search & Filter</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;