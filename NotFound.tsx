import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import { useCursor } from './CursorContext';

const NotFound: React.FC = () => {
  const { setCursorType } = useCursor();
  
  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  return (
    <PageTransition>
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold mb-4"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-6"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
            The page you are looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/" 
              className="btn btn-primary"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;