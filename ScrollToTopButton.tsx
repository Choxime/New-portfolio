import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useCursor } from './CursorContext';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    toggle();
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-opacity z-40 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
