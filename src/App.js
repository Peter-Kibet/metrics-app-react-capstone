import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes
import HomePage from './pages/HomePage';
import CoinDetailPage from './pages/CoinDetailPage';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:coinId" element={<CoinDetailPage />} />
    </Routes>
  </Router>
);

export default App;
