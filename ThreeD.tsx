import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Product Visualization',
    category: '3D',
    image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Architectural Rendering',
    category: '3D',
    image: 'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Character Modeling',
    category: '3D',
    image: 'https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Abstract Compositions',
    category: '3D',
    image: 'https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Logo Animation',
    category: '3D',
    image: 'https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Environment Design',
    category: '3D',
    image: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ThreeD: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">3D Design</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-16">
              Immersive three-dimensional creations that add depth, realism, and visual impact
              to products, environments, and brand experiences.
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
              3D Design Expertise
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-gray-300"
            >
              I leverage cutting-edge 3D software and techniques to create visually stunning three-dimensional assets that can be used across various media. From photorealistic product visualizations to stylized character models, my 3D work combines technical precision with creative vision.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              My process includes detailed modeling, texturing, lighting, and rendering to create 3D assets that not only look impressive but also effectively communicate the desired message or showcase products in their best light.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ThreeD;