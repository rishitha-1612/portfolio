import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DownloadButterflyButton } from '../components/ui/DownloadButterflyButton';

export const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const heroScrollProgress = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(heroScrollProgress.scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(heroScrollProgress.scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(heroScrollProgress.scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section 
      ref={heroRef} 
      className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{ y: y2, opacity }}
      >
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-display font-bold uppercase tracking-[0.3em] mb-8 block text-glow"
        >
          Full-Stack AI Engineer
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.85] font-display font-black uppercase tracking-tighter mb-12"
        >
          Rishitha<br />
          <motion.span style={{ x: y1 }} className="inline-block text-muted">Rasineni</motion.span>
        </motion.h1>
        <DownloadButterflyButton />
      </motion.div>
    </motion.section>
  );
};
