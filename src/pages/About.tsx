import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RESUME_DATA } from '../constants';

export const About = () => {
  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="01">About</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-display leading-tight"
        >
          Building <span className="text-accent text-glow italic">intelligent architecture</span> that converts data into impact.
        </motion.div>
        <div className="space-y-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted leading-relaxed"
          >
            {RESUME_DATA.summary}
          </motion.p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core Focus</h4>
              <ul className="space-y-2 font-display text-xl">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Machine Learning</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> NLP Systems</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Full-Stack Dev</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Education</h4>
              <div className="space-y-4">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="font-display">
                    <div className="text-lg leading-tight">{edu.institution}</div>
                    <div className="text-muted text-sm">{edu.degree} ({edu.period})</div>
                    {edu.details && <div className="text-accent text-sm font-bold uppercase tracking-widest mt-1">{edu.details}</div>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
