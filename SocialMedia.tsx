import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Campaign Strategy',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Content Creation',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Instagram Stories',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Social Media Ads',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Video Content',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Brand Campaigns',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const SocialMedia: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">Social Media</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-16">
              Engaging digital content optimized for social platforms that builds brand
              awareness, drives engagement, and connects with target audiences.
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
              Social Media Strategy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-gray-300"
            >
              I approach social media content with both creativity and strategy, understanding that effective social content needs to not only look great but also drive engagement and achieve specific marketing objectives.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              From developing content calendars to creating eye-catching visuals and videos optimized for each platform, my social media work helps brands build meaningful connections with their audience while maintaining visual consistency with their overall brand identity.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SocialMedia;