import React, { useState } from 'react';
import { motion } from 'framer-motion';
import campaLogo from '../assets/images/Campa_Logo.svg'; // 1. Import the logo

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

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <motion.div 
          className="w-full max-w-md p-8 space-y-6 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center">
            <img src={campaLogo} alt="Campa Cola Logo" className="w-32 mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-400 mt-2">
              {isLogin ? 'Sign in to continue' : 'Sign up to get started'}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Name" />
              </div>
            )}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email address</label>
              <input type="email" name="email" id="email" className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
              <input type="password" name="password" id="password" className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-red-500 hover:underline ml-2">
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
