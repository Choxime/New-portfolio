import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Clock, Globe, Star, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useCursor } from '../context/CursorContext';

const About: React.FC = () => {
  const { setCursorType } = useCursor();
  
  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  const skills = [
    { name: 'Motion Design', level: 95 },
    { name: 'Visual Identity', level: 90 },
    { name: 'Illustration', level: 85 },
    { name: '3D Design', level: 80 },
    { name: 'Social Media', level: 90 },
    { name: 'UI/UX Design', level: 85 },
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">About Maxime</h1>
              <p className="text-xl text-gray-300 mb-8">
                Art Director & Visual Designer with over 8 years of experience creating compelling 
                visual solutions for brands and agencies.
              </p>
              <p className="text-gray-300 mb-6">
                Based in Paris, I specialize in motion design, visual identity development, illustration, 
                3D design, and social media content creation. My approach combines strategic thinking 
                with creative execution to deliver visually stunning and effective solutions.
              </p>
              <p className="text-gray-300 mb-8">
                I've had the privilege of working with clients across various industries, from 
                startups to established brands, helping them communicate their message through 
                impactful visual storytelling.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Let's Work Together
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-indigo-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Work With Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Clock, 
                title: 'Efficient Process', 
                description: 'Streamlined workflow that delivers results on time and within budget.' 
              },
              { 
                icon: Star, 
                title: 'Creative Excellence', 
                description: 'Award-winning designs that stand out and make an impact.' 
              },
              { 
                icon: Users, 
                title: 'Collaborative Approach', 
                description: 'Working together to bring your vision to life with clear communication.' 
              },
              { 
                icon: Globe, 
                title: 'Global Perspective', 
                description: 'Experience working with international brands and diverse markets.' 
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-black p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon size={40} className="text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Let's create something amazing together. Reach out to discuss your next creative project.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;