// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../api/products';
import { motion } from 'framer-motion';

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

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <motion.div 
        className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center"
        initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      >
        <h1 className="text-4xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 text-red-500 hover:underline">
          &larr; Back to Products
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-full min-h-screen bg-gray-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={product.image} alt={product.name} className="max-w-xs md:max-w-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold">{product.name}</h1>
            <p className="text-gray-400 mt-4 text-lg">{product.description}</p>
            <p className="text-4xl font-bold text-red-500 my-6">{product.price}</p>
            <button className="w-full md:w-auto bg-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
              Buy Now
            </button>
            <div className="mt-8">
              <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                &larr; Back to all products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
