import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RESUME_DATA } from '../constants';

export const Experience = () => {
  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="04">Research & Experience</SectionHeading>
      
      {/* Research Achievements Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-display uppercase mb-12 text-accent">Research & Achievements</h3>
        <div className="space-y-6">
          {RESUME_DATA.achievements.map((achievement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 border border-border hover:border-accent transition-all group"
            >
              <p className="text-lg text-muted leading-relaxed group-hover:text-white transition-colors">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-3xl font-display uppercase mb-12 text-accent">Experience</h3>
        <div className="space-y-20">
          {RESUME_DATA.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid lg:grid-cols-3 gap-8 group"
            >
              <div className="text-accent font-display text-xl">{exp.period}</div>
              <div className="lg:col-span-2">
                <h3 className="text-4xl font-display uppercase mb-4 transition-colors group-hover:text-accent">{exp.role}</h3>
                <div className="text-xl text-muted mb-6">{exp.company}</div>
                <p className="text-lg text-muted leading-relaxed border-l-2 border-border pl-8 group-hover:border-accent transition-colors">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
