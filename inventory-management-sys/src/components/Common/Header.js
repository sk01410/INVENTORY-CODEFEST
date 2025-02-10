import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/stock">Stock Management</a></li>
            <li><a href="/restock">Restock</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;