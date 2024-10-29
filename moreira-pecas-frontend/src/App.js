import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
