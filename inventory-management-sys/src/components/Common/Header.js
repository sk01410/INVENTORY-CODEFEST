import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Inventory Management System</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link to ="/dashboard" className='nav-link'>Dashboard</Link></li>
            <li><Link to ="/stock" className='nav-link'>Stock Management</Link></li>
            <li><Link to ="/restock" className='nav-link'>Restock</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;