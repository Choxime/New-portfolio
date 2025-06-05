import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

const Footer: React.FC = () => {
  const { setCursorType } = useCursor();
  
  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              className="text-2xl font-bold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              MG<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Freelance Art Director specializing in motion design, visual identity, illustration, 3D, and social media content.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Motion Design', path: '/motion-design' },
                { name: 'Visual Identity', path: '/visual-identity' },
                { name: 'Illustration', path: '/illustration' },
                { name: '3D', path: '/3d' },
                { name: 'Social Media', path: '/social-media' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Instagram />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Linkedin />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Twitter />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Mail />
              </a>
            </div>
            <Link 
              to="/contact" 
              className="btn btn-outline text-sm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Maxime GRELET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;