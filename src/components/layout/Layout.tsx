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
      {/* Squiggly Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-accent z-[100] pointer-events-none opacity-80"
        style={{
          maskImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q10 2 20 5 T40 5' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q10 2 20 5 T40 5' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          maskRepeat: 'repeat-x',
          WebkitMaskRepeat: 'repeat-x',
          clipPath: useTransform(scaleX, s => `inset(0 ${100 - (s as number) * 100}% 0 0)`),
          filter: 'drop-shadow(0 0 4px var(--color-accent))'
        }}
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
