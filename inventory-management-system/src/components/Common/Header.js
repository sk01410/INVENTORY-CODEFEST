import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">Inventory Management System</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
                    <li><a href="#stock-management" className="hover:underline">Stock Management</a></li>
                    <li><a href="#restock" className="hover:underline">Restock</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;