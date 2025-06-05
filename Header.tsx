import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Palette, FilmIcon, PenTool, Cuboid as Cube, Instagram } from 'lucide-react';
import { useCursor } from './CursorContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              MG<span className="text-indigo-500">.</span>
            </motion.span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Motion Design', path: '/motion-design', icon: FilmIcon },
              { name: 'Visual Identity', path: '/visual-identity', icon: Palette },
              { name: 'Illustration', path: '/illustration', icon: PenTool },
              { name: '3D', path: '/3d', icon: Cube },
              { name: 'Social Media', path: '/social-media', icon: Instagram },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu */}
          <motion.div
            className={`fixed inset-0 bg-black flex flex-col justify-center items-center md:hidden ${isOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              {[
                { name: 'Motion Design', path: '/motion-design', icon: FilmIcon },
                { name: 'Visual Identity', path: '/visual-identity', icon: Palette },
                { name: 'Illustration', path: '/illustration', icon: PenTool },
                { name: '3D', path: '/3d', icon: Cube },
                { name: 'Social Media', path: '/social-media', icon: Instagram },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-2xl font-medium hover:text-indigo-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="mr-2" size={20} />}
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;