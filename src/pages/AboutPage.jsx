import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '1977',
    title: 'The Beginning',
    description: 'Campa Cola is introduced by the Pure Drinks Group, quickly becoming India\'s favorite soft drink after the exit of Coca-Cola.',
  },
  {
    year: '1991',
    title: 'The Decline',
    description: 'With India\'s economic liberalization, global giants like Coca-Cola and Pepsi re-enter the market, leading to Campa\'s decline.',
  },
  {
    year: '2022',
    title: 'The Acquisition',
    description: 'Reliance Industries acquires the iconic Campa brand for ₹22 crore, signaling a new era for the beloved drink.',
  },
  {
    year: '2023',
    title: 'The Great Indian Relaunch',
    description: 'Campa is relaunched across India with a modern look and disruptive pricing, ready to challenge the global beverage giants once again.',
  },
];

const AboutPage = () => {
  return (
    <div className="w-full bg-gray-900 text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From an Indian icon to a modern challenger.
        </motion.p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-700" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div>
                
                {/* Timeline Card */}
                <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="w-full md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <p className="text-red-500 font-semibold text-lg mb-1">{event.year}</p>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
