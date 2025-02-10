import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';
import Overview from './components/Dashboard/Overview';
import StockAlerts from './components/Dashboard/StockAlerts';
import Charts from './components/Dashboard/Charts';
import StockList from './components/StockManagement/StockList';
import StockForm from './components/StockManagement/StockForm';
import StockHistory from './components/StockManagement/StockHistory';
import RestockOrders from './components/Restock/RestockOrders';
import WarehouseTransfer from './components/Restock/WarehouseTransfer';
import PredictiveRestock from './components/Restock/PredictiveRestock';
import SearchFilter from './components/Common/SearchFilter';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/stock-alerts" element={<StockAlerts />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/stock-list" element={<StockList />} />
              <Route path="/stock-form" element={<StockForm />} />
              <Route path="/stock-history" element={<StockHistory />} />
              <Route path="/restock-orders" element={<RestockOrders />} />
              <Route path="/warehouse-transfer" element={<WarehouseTransfer />} />
              <Route path="/predictive-restock" element={<PredictiveRestock />} />
              <Route path="/search" element={<SearchFilter />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;