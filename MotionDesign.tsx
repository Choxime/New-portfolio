import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Brand Animation',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Product Showcase',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/7096638/pexels-photo-7096638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Explainer Video',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/3844724/pexels-photo-3844724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'TV Commercial',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'UI Animation',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/13035153/pexels-photo-13035153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Event Intro',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const MotionDesign: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">Motion Design</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-16">
              Dynamic animations and visual storytelling that bring brands to life through movement,
              timing, and emotion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              My Approach to Motion
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-gray-300"
            >
              I believe that great motion design is more than just moving elements—it's about creating emotional connections and enhancing storytelling through movement. Every animation has a purpose, whether it's to explain a complex concept, highlight a product feature, or simply delight the viewer.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              My process combines technical precision with creative exploration, ensuring that each project not only meets the brief but exceeds expectations in delivering memorable visual experiences.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MotionDesign;