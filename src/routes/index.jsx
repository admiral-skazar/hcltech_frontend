import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import HomePage from '../pages/Homepage/Homepage';
import Chef from '../pages/Chef/Chef';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/chef" element={<Chef />} />
    </Routes>
  );
}

export default AppRoutes;