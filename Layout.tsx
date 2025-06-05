import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import ScrollToTopButton from './ScrollToTopButton';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <motion.main
        id="main-content"
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;