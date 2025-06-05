import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const percent = total ? (scrollTop / total) * 100 : 0;
      setProgress(percent);
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
