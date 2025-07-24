import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../api/products';

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

const ProductsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-full bg-gray-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Flavors
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-400 text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the refreshing range of Campa.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <motion.div
                  className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-full h-64 bg-black flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full w-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-gray-400 mt-2 h-12">{product.description.substring(0, 50)}...</p>
                    <p className="text-xl font-semibold text-red-500 mt-4">{product.price}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
