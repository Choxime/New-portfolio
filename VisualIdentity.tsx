import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Logo Design',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Corporate Rebrand',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/5710829/pexels-photo-5710829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Brand Guidelines',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/5699398/pexels-photo-5699398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Packaging Design',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/4464816/pexels-photo-4464816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Brand Applications',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const VisualIdentity: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">Visual Identity</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-16">
              Crafting distinctive brand identities that communicate core values and create
              memorable impressions across all touchpoints.
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
              Identity Design Philosophy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-gray-300"
            >
              I approach visual identity as the foundation of any successful brand. By carefully crafting logos, color palettes, typography, and visual systems, I create cohesive identities that not only look beautiful but effectively communicate a brand's values and personality to their audience.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              Each identity project begins with deep research and strategy development, ensuring that the final visual system isn't just aesthetically pleasing but strategically sound and built to last through changing market conditions.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default VisualIdentity;