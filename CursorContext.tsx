import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CursorContextType {
  cursorType: string;
  setCursorType: (type: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      <div
        className={`custom-cursor ${
          cursorType === 'hover' ? 'scale-150' : cursorType === 'click' ? 'scale-75' : ''
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s, opacity 0.3s',
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};