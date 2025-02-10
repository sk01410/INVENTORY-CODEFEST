# README.md

# Inventory Management System

## Overview
The Inventory Management System is a responsive web application designed to manage stock levels across multiple warehouses. It provides features for stock management, restocking mechanisms, and user role management.

## Features
- **Dashboard**: 
  - Overview of stock levels in each warehouse
  - Low-stock alerts with predictive restocking suggestions
- **Stock Management**: 
  - Add, update, and delete stock items
  - View stock levels and movement history
- **Restocking Mechanism**: 
  - Option to restock directly from a seller
  - Option for inter-warehouse transfer to balance stock levels
- **Automated Restocking**: 
  - Predict when stock is running low and suggest transfer/restocking
  - Generate restock orders for sellers or suggest moving stock from another warehouse
- **User Roles**: 
  - Admin: Full access to manage stock, transfers, and restocking
  - Warehouse Manager: Can manage stock only in their assigned warehouse

## Technology Stack
- **Frontend**: React (with Tailwind for UI)
- **Backend**: Node.js + Express.js
- **Database**: CSV
- **API Integration**: REST API for stock updates & seller connections

## Additional Features
- Search & filter stock items by warehouse, category, or status
- Charts for stock trends and warehouse activity
- Scalable architecture for easy expansion to more warehouses or suppliers

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd inventory-management-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## License
This project is licensed under the MIT License.