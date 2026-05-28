import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectBlock } from '../components/ui/ProjectBlock';
import { RESUME_DATA } from '../constants';

export const Projects = () => {
  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="03">Projects</SectionHeading>
      <div className="border-t border-border">
        {RESUME_DATA.projects.map((project) => (
          <div key={project.title}>
            <ProjectBlock project={project} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};
