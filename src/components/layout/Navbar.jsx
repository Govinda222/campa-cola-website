import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import campaLogo from '../../assets/images/Campa_Logo.svg'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyles = ({ isActive }) => 
    isActive 
      ? 'text-red-500 font-semibold' 
      : 'text-white hover:text-red-500 transition-colors duration-300';

  return (
    <header className={`fixed top-0 left-0 w-full px-8 py-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <NavLink to="/">
          <img src={campaLogo} alt="Campa Cola Logo" className="w-24 h-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><NavLink to="/" className={linkStyles}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkStyles}>About</NavLink></li>
          <li><NavLink to="/products" className={linkStyles}>Products</NavLink></li>
        </ul>
        <NavLink to="/login" className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
          Login / Signup
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
            {isMenuOpen ? (
              <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg mt-2 py-4">
          <ul className="flex flex-col items-center gap-4">
            <li><NavLink to="/" className={linkStyles} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkStyles} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/products" className={linkStyles} onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li>
              <NavLink to="/login" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Login / Signup
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
