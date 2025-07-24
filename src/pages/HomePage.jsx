// src/pages/HomePage.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Import local images, video, and logo
import campaColaImg from '../assets/images/campa-cola.jpg';
import campaOrangeImg from '../assets/images/campa-orange.jpg';
import campaLemonImg from '../assets/images/campa-lemon.jpg';
import heroVideo from '../assets/videos/hero-video.mp4';
import campaLogo from '../assets/images/Campa_Logo.svg'; // 1. Import the logo

// Animation settings
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Video Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 p-4">
          {/* 2. Add the logo image here */}
          <motion.img
            src={campaLogo}
            alt="Campa Cola Logo"
            className="w-48 mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The Fizz is Back.
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            The Great Indian Taste, Reimagined.
          </motion.p>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="w-full bg-gray-900 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            A Flavor for Everyone
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <motion.div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={campaColaImg} alt="Campa Cola" className="w-32 h-auto mb-6" />
              <h3 className="text-2xl font-semibold">Campa Cola (200ml)</h3>
              <p className="mt-2 text-gray-400">The original, iconic taste.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <img src={campaOrangeImg} alt="Campa Orange" className="w-32 h-auto mb-6" />
              <h3 className="text-2xl font-semibold">Campa Orange (200ml)</h3>
              <p className="mt-2 text-gray-400">A burst of tangy citrus.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
              <img src={campaLemonImg} alt="Campa Lemon" className="w-32 h-auto mb-6" />
              <h3 className="text-2xl font-semibold">Campa Lemon (200ml)</h3>
              <p className="mt-2 text-gray-400">Zesty, fresh, and fizzy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="w-full bg-black py-24 px-8">
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Stay in the Loop</h2>
          <p className="text-gray-400 mt-4">Join our newsletter to get the latest updates, offers, and news about Campa directly in your inbox.</p>
          <form className="mt-8 flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">Subscribe</button>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HomePage;
