import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background glow movement
  const glowX1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const glowX2 = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["-10%", "-5%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col bg-black text-white selection:bg-accent selection:text-white font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left shadow-[0_0_15px_var(--color-accent)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Grid Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Background Glows */}
      <motion.div 
        style={{ left: glowX1, top: glowY1 }}
        className="fixed w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        style={{ right: glowX2, bottom: glowY2 }}
        className="fixed w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" 
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-[1600px] w-full mx-auto px-8 flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
