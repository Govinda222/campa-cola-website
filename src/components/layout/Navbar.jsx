// src/components/layout/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-8 py-4 z-10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="text-white text-3xl font-extrabold tracking-tighter">
          Campa
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="/home" className="text-white hover:text-red-500 transition-colors duration-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-red-500 transition-colors duration-300">About</a></li>
          <li><a href="/products" className="text-white hover:text-red-500 transition-colors duration-300">Products</a></li>
        </ul>
        <a href="/login" className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
          Login / Signup
        </a>
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;