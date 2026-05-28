import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Contact = () => {
  return (
    <motion.section 
      className="py-40 flex-grow flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-7xl font-display font-black uppercase tracking-tighter mb-12 text-glow">Initiate<br />Contact</h2>
          <div className="flex flex-col gap-6 items-start">
            <motion.a 
              whileHover={{ color: "var(--color-accent)", x: 10 }}
              href={`tel:${RESUME_DATA.contact.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-4 text-2xl font-display transition-all group"
            >
              <div className="p-3 border border-border group-hover:border-accent transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <span>{RESUME_DATA.contact.phone}</span>
            </motion.a>

            <motion.a 
              whileHover={{ color: "var(--color-accent)", x: 10 }}
              href={`mailto:${RESUME_DATA.contact.email}`} 
              className="flex items-center gap-4 text-2xl font-display transition-all group"
            >
              <div className="p-3 border border-border group-hover:border-accent transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span>{RESUME_DATA.contact.email}</span>
            </motion.a>

            <motion.a 
              whileHover={{ color: "var(--color-accent)", x: 10 }}
              href={RESUME_DATA.contact.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-2xl font-display transition-all group"
            >
              <div className="p-3 border border-border group-hover:border-accent transition-all">
                <Github className="w-6 h-6" />
              </div>
              <span>GitHub</span>
            </motion.a>

            <motion.a 
              whileHover={{ color: "var(--color-accent)", x: 10 }}
              href={RESUME_DATA.contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-2xl font-display transition-all group"
            >
              <div className="p-3 border border-border group-hover:border-accent transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
