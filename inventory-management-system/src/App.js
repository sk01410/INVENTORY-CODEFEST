import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <div className="app">
        <Header />
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/stock-alerts" component={StockAlerts} />
            <Route path="/charts" component={Charts} />
            <Route path="/stock-list" component={StockList} />
            <Route path="/stock-form" component={StockForm} />
            <Route path="/stock-history" component={StockHistory} />
            <Route path="/restock-orders" component={RestockOrders} />
            <Route path="/warehouse-transfer" component={WarehouseTransfer} />
            <Route path="/predictive-restock" component={PredictiveRestock} />
            <Route path="/search" component={SearchFilter} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;