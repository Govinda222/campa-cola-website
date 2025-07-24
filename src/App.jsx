import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import all our page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {

  const location = useLocation();

  return (
    <main className="bg-black text-white">
      <Navbar />
      {/* Wrap the Routes component with AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* We provide a key based on the URL pathname. This tells AnimatePresence when the page changes. */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
