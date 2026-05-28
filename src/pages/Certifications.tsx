import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RESUME_DATA } from '../constants';

export const Certifications = () => {
  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="05">Certificates</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.certifications.map((cert, idx) => (
          <motion.a
            key={cert.title}
            // @ts-ignore - added link dynamically to type
            href={cert.link || '#'}
            // @ts-ignore
            target={cert.link ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 border border-border hover:border-accent transition-all group relative overflow-hidden ${cert.link ? 'cursor-pointer hover:bg-white/[0.02]' : 'cursor-default'}`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{cert.issuer} | {cert.year}</div>
            <h4 className="text-xl font-display mb-4 group-hover:text-accent transition-colors">{cert.title}</h4>
            <p className="text-muted text-sm leading-relaxed">{cert.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};
