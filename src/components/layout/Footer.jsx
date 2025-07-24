import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import campaLogo from '../../assets/images/Campa_Logo.svg'; 

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Side: Logo and Copyright */}
        <div className="mb-6 md:mb-0">

          <img src={campaLogo} alt="Campa Cola Logo" className="w-28 h-auto mx-auto md:mx-0" />
          <p className="text-gray-400 mt-2">© 2024 The Great Indian Taste. All Rights Reserved.</p>
        </div>
        
        {/* Right Side: Social Media Links */}
        <div className="flex gap-6">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaYoutube size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
