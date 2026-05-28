import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ children, number }: { children: React.ReactNode, number: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16"
  >
    <div className="flex items-baseline gap-4 mb-4">
      <span className="font-display text-muted text-sm font-bold tracking-tighter">{number}</span>
      <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">{children}</h2>
    </div>
    <div className="h-[1px] w-full bg-border origin-left" />
  </motion.div>
);
