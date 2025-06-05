import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorContext';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, onClick }) => {
  const { setCursorType } = useCursor();
  
  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  return (
    <motion.div
      className="project-card"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="overlay">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;