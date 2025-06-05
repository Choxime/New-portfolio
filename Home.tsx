import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FilmIcon, Palette, PenTool, Cuboid as Cube, Instagram, ArrowRight } from 'lucide-react';
import PageTransition from './PageTransition';
import { useCursor } from './CursorContext';

const Home: React.FC = () => {
  const { setCursorType } = useCursor();
  
  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  const categories = [
    { 
      title: 'Motion Design',
      icon: FilmIcon,
      description: 'Dynamic animations that tell your story',
      path: '/motion-design',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      title: 'Visual Identity',
      icon: Palette,
      description: 'Crafting unique brand expressions',
      path: '/visual-identity',
      color: 'from-blue-500 to-teal-500'
    },
    { 
      title: 'Illustration',
      icon: PenTool,
      description: 'Custom artwork that captures attention',
      path: '/illustration',
      color: 'from-pink-500 to-red-500'
    },
    { 
      title: '3D',
      icon: Cube,
      description: 'Immersive experiences in three dimensions',
      path: '/3d',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      title: 'Social Media',
      icon: Instagram,
      description: 'Engaging content for the digital world',
      path: '/social-media',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <PageTransition>
      <section className="h-screen flex items-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Portfolio Com' <span className="text-indigo-500">&</span> Design
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creative Direction by Maxime GRELET
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                to="/about" 
                className="btn btn-primary mr-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              className="absolute w-40 h-40 rounded-full bg-indigo-600 blur-3xl"
              initial={{ x: '10%', y: '10%' }}
              animate={{ x: '15%', y: '15%' }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <motion.div 
              className="absolute w-60 h-60 rounded-full bg-purple-600 blur-3xl"
              initial={{ x: '80%', y: '30%' }}
              animate={{ x: '70%', y: '35%' }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <motion.div 
              className="absolute w-32 h-32 rounded-full bg-blue-600 blur-3xl"
              initial={{ x: '30%', y: '70%' }}
              animate={{ x: '35%', y: '65%' }}
              transition={{ 
                duration: 18, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore My Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={category.path}
                  className="block bg-gray-900 rounded-xl overflow-hidden relative transition-transform hover:-translate-y-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <ArrowRight size={32} className="text-white" />
                  </div>
                  <div className="p-8">
                    <category.icon size={32} className="mb-4 text-indigo-500" />
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            Ready to Start a Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Let's transform your ideas into compelling visual experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;